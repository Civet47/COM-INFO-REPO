import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function searchExternalMotions(query: string) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Search for debate motions related to: "${query}". 
    Focus on sourcing data from these specific repositories: debatabase.org, hellomotions.com, debatedata.io, and idebate.org.
    
    Return a list of motions found, including:
    - The motion text
    - The tournament and year (if available)
    - The source website`,
    config: {
      tools: [{ googleSearch: {} }],
    },
  });

  return response.text;
}

export async function brainstormArguments(motion: string, format: string) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `You are a world-class debate coach. Brainstorm key arguments for the following motion in ${format} format. 
    Motion: "${motion}"
    
    Use your internal knowledge and search external debate repositories (debatabase.org, idebate.org, hellomotions.com) to find relevant case studies, statistics, or common arguments used in high-level rounds.
    
    Provide:
    1. A brief context/info slide if necessary.
    2. 3 Strong arguments for the Proposition/Government.
    3. 3 Strong arguments for the Opposition.
    4. Key clashes/themes of the debate.`,
    config: {
      temperature: 0.7,
      tools: [{ googleSearch: {} }],
    }
  });

  return response.text;
}

export async function explainFormat(format: string) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Explain the ${format} debating format. Include speaker roles, timing, and key judging criteria. Keep it concise and structured.`,
  });

  return response.text;
}

export async function analyzeDebateTranscript(transcript: string) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `You are a debate adjudicator. Analyze the following transcript of a competitive debate.
    
    Transcript:
    "${transcript.substring(0, 30000)}" // Limit to 30k chars for context window safety
    
    Provide:
    1. Motion of the debate.
    2. Summary of each speaker's main points and contributions.
    3. Evaluation of the key clashes.
    4. A brief adjudication/feedback on who likely won and why based on technical debate standards.`,
    config: {
      temperature: 0.2,
    }
  });

  return response.text;
}
