
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

// Service to handle AI responses for the Smart Assistant
export const generateAssistantResponse = async (userQuery: string, history: Message[]) => {
  // Always initialize GoogleGenAI with { apiKey: process.env.API_KEY } as per guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemInstruction = `
    You are the "ThinkLab Smart Assistant". 
    ThinkLab provides:
    1. Professional Training: AI, OSH, HSE, HSE Audit, ERP, HAZMAT, Crisis Management, Language Certification.
    2. Corporate Consultancy: Customized training, competency development, operational consultancy.
    3. Certification Support: HSE, First Aid, IELTS, TOEFL, MUET.

    Your goal is to help corporate leaders and professionals find the right competency development program.
    Keep answers professional, concise, and executive-level. 
    Focus only on the services listed above. 
    If asked about other topics, politely redirect to ThinkLab's core competencies.
  `;

  try {
    // Map existing message history to the structure expected by the Gemini API.
    // The role 'assistant' must be mapped to 'model' for the @google/genai SDK.
    const contents = history.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    // Append the current user query to the prompt contents.
    contents.push({
      role: 'user',
      parts: [{ text: userQuery }]
    });

    // Using gemini-3-flash-preview for basic text tasks like customer support as per selection rules.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: {
        systemInstruction,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    // Extracting Text Output: Use the .text property directly (not a method call).
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I am unable to process your request at the moment. Please contact our support team directly.";
  }
};
