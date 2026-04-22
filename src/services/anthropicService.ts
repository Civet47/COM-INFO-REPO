import { generateText } from 'ai';
import { anthropic } from '@ai-sdk/anthropic';

/**
 * Implementation requested by the user.
 * Note: 'claude-opus-4.6' is used as requested.
 */
export async function getCapitalOfFrance() {
  const { text } = await generateText({
    model: anthropic('claude-opus-4.6'), // Exactly as requested
    prompt: 'What is the capital of France?',
  });
  return text;
}

/**
 * A more general version of the requested implementation.
 */
export async function generateAnthropicText(prompt: string, modelName: string = 'claude-3-5-sonnet-20240620') {
  try {
    const { text } = await generateText({
      model: anthropic(modelName),
      prompt: prompt,
    });
    return text;
  } catch (error) {
    console.error('Anthropic API Error:', error);
    throw error;
  }
}
