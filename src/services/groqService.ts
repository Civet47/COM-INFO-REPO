import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY || "",
  dangerouslyAllowBrowser: true // For client-side demos, but server-side is safer
});

export async function generateGroqResponse(prompt: string, systemPrompt?: string) {
  try {
    const messages: any[] = [];
    if (systemPrompt) {
      messages.push({ role: "system", content: systemPrompt });
    }
    messages.push({ role: "user", content: prompt });

    const chatCompletion = await groq.chat.completions.create({
      messages,
      model: "llama-3.3-70b-versatile",
    });

    return chatCompletion.choices[0]?.message?.content || "";
  } catch (error) {
    console.error("Groq Analysis Error:", error);
    throw error;
  }
}

export async function groqChat(messages: { role: string; content: string }[]) {
  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: "You are a world-class debate coach and research assistant. Help the user find motions, brainstorm arguments, and understand debate formats. Be concise, professional, and insightful." },
        ...messages.map(m => ({ role: m.role as any, content: m.content }))
      ],
      model: "llama-3.3-70b-versatile",
    });

    return { text: chatCompletion.choices[0]?.message?.content || "" };
  } catch (error) {
    console.error("Groq Chat Error:", error);
    throw error;
  }
}

export async function searchGlobalDebateRepository(query: string) {
  const prompt = `You are an elite research assistant for world-class debate teams. 
  Perform a deep internal analysis and provide a comprehensive debate digest for the following query: "${query}".
  
  Since you are a high-performance LLM, provide the most up-to-date arguments, statistics, and expert perspectives from your training data.
  
  Structure your response with:
  1. Key Arguments for both sides (Government/Proposition and Opposition).
  2. Supporting Evidence (Identify specific statistics, quotes, or seminal research).
  3. Evaluation of the strength of each piece of evidence (Strong, Weak, or Disputed).
  4. Suggested Sources for further verification.
  
  Format clearly using Markdown.`;

  return generateGroqResponse(prompt);
}

export async function searchExternalMotions(query: string, deep: boolean = false) {
  const prompt = `Search for debate motions related to: "${query}". 
  Focus on the most common and high-quality motions from major tournaments (WSDC, WUDC, BP, etc.).
  ${deep ? "Perform an extremely detailed search, providing context, years, and specific tournament names where possible." : ""}
  
  Return a list of motions found, including:
  - The motion text
  - The tournament and year (if available)
  - The source context`;

  return generateGroqResponse(prompt);
}

export async function brainstormArguments(motion: string, format: string) {
  const prompt = `You are a world-class debate coach. Brainstorm key arguments for the following motion in ${format} format. 
  Motion: "${motion}"
  
  Provide:
  1. A brief context/info slide if necessary.
  2. 3 Strong arguments for the Proposition/Government.
  3. 3 Strong arguments for the Opposition.
  4. Key clashes/themes of the debate.`;

  return generateGroqResponse(prompt);
}

export async function explainFormat(format: string) {
  const prompt = `Explain the ${format} debating format. Include speaker roles, timing, and key judging criteria. Keep it concise and structured.`;
  return generateGroqResponse(prompt);
}

export async function analyzeDebateTranscript(transcript: string) {
  const prompt = `You are a debate adjudicator. Analyze the following transcript of a competitive debate.
  
  Transcript:
  "${transcript.substring(0, 50000)}"
  
  Provide:
  1. Motion of the debate.
  2. Summary of each speaker's main points and contributions.
  3. Evaluation of the key clashes.
  4. A brief adjudication/feedback on who likely won and why based on technical debate standards.`;

  return generateGroqResponse(prompt);
}
