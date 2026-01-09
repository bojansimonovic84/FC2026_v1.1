
import { GoogleGenAI } from "@google/genai";
import type { OrderDetails } from '../types';
import { saveOrder } from './supabase';

export const generateMeditationScript = async (details: OrderDetails): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const userPrompt = `Draft the structural blueprint for a custom-engineered subconscious reprogramming track for ${details.name}.
      Identity: ${details.gender === 'male' ? 'Male' : 'Female'}. 
      *CRITICAL*: Ensure grammar matches the identified gender.
      Target Intention: ${details.detailedGoal}
      Category: ${details.goal}
      Voice Profile: ${details.voice}
      Brand: THE FREQUENCY CODE™`;

    const systemInstruction = `Act as a Senior Manifestation Architect. Your output will be the structural Foundation Script for our Studio Design and Audio team.
      Requirements:
      - Write strictly in English.
      - Use linguistic markers compatible with 432Hz binaural mastering.
      - 4 Phases: Alpha Induction, Pattern Dissolution, Quantum Seed Insertion (using the user's specific intent), Integration.
      - Tone: Luxurious, professional, authoritative, and scientific.
      - Provide notes for the Audio Engineer (e.g., [Engineers Note: Insert Theta pulse here]).`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: userPrompt,
      config: {
        systemInstruction: systemInstruction,
      },
    });

    const script = response.text || "Neural frequency blueprint locked.";
    await saveOrder(details, script);
    return script;
  } catch (error) {
    console.error("AI Generation Failed:", error);
    const fallback = `Manual engineering required for ${details.name}. Intent: ${details.detailedGoal}.`;
    await saveOrder(details, fallback);
    return fallback;
  }
};
