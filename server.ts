import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import { generateText } from 'ai';
import { createAnthropic } from '@ai-sdk/anthropic';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Anthropic Provider Setup
  const anthropic = createAnthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
  });

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
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
