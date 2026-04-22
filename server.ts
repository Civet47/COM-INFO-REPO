import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import { generateText } from 'ai';
import { createAnthropic } from '@ai-sdk/anthropic';
import dotenv from 'dotenv';
import * as YoutubeTranscriptPkg from 'youtube-transcript';
import Groq from "groq-sdk";

dotenv.config();

const YoutubeTranscript = (YoutubeTranscriptPkg as any).YoutubeTranscript || (YoutubeTranscriptPkg as any).default || YoutubeTranscriptPkg;

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Anthropic Provider Setup
  const anthropic = createAnthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
  });

  // Groq Setup
  const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
  });

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.get("/api/youtube/transcript", async (req, res) => {
    const videoId = req.query.videoId as string;
    if (!videoId) {
      return res.status(400).json({ error: "videoId is required" });
    }

    try {
      const transcript = await YoutubeTranscript.fetchTranscript(videoId);
      res.json(transcript);
    } catch (error: any) {
      console.error('YouTube Transcript Error:', error);
      res.status(500).json({ error: error.message || "Failed to fetch transcript" });
    }
  });

  app.post("/api/groq/chat", async (req, res) => {
    const { messages, model } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "messages array is required" });
    }

    try {
      const chatCompletion = await groq.chat.completions.create({
        messages,
        model: model || "llama-3.3-70b-versatile",
      });

      res.json({ text: chatCompletion.choices[0]?.message?.content || "" });
    } catch (error: any) {
      console.error('Groq Chat Error:', error);
      res.status(500).json({ error: error.message || "Failed to get response from Groq" });
    }
  });

  app.post("/api/analyze-debate", async (req, res) => {
    const { transcript } = req.body;
    if (!transcript) {
      return res.status(400).json({ error: "transcript is required" });
    }

    try {
      const chatCompletion = await groq.chat.completions.create({
        messages: [
          { 
            role: "system", 
            content: "You are a debate adjudicator. Analyze the transcript of a competitive debate. Provide: 1. Motion. 2. Summary of each speaker. 3. Evaluation of key clashes. 4. Feedback on who likely won and why." 
          },
          { role: "user", content: `Analyze this transcript:\n\n${transcript.substring(0, 50000)}` }
        ],
        model: "llama-3.3-70b-versatile",
      });

      res.json({ analysis: chatCompletion.choices[0]?.message?.content || "" });
    } catch (error: any) {
      console.error('Groq Analysis Error:', error);
      res.status(500).json({ error: error.message || "Failed to analyze debate" });
    }
  });

  // User's requested implementation
  app.post("/api/anthropic/test", async (req, res) => {
    try {
      // The user's exact snippet logic
      const { text } = await generateText({
        model: anthropic('claude-opus-4.6'), // Using the provider instance
        prompt: 'What is the capital of France?',
      });

      res.json({ text });
    } catch (error: any) {
      console.error('Anthropic Error:', error);
      res.status(500).json({ 
        error: error.message,
        details: 'Make sure ANTHROPIC_API_KEY is set in the Secrets panel.'
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
