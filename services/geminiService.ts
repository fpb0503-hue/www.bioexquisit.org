
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getKitchenAdvice = async (userQuery: string, language: 'es' | 'en' = 'es') => {
  if (!API_KEY) return language === 'es' ? "Asistente no disponible." : "Assistant unavailable.";

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const instruction = language === 'es' 
    ? "Eres el Asistente de Cocina de BIOEXQUISIT. Eres experto en panela orgánica y cocina saludable. Sugiere formas creativas de usar panela, explica beneficios nutricionales y mantén siempre un tono de marca premium, cálido y servicial. RESPONDE SIEMPRE EN ESPAÑOL."
    : "You are the BIOEXQUISIT Kitchen Assistant. Expert in organic panela and healthy cooking. Suggest creative ways to use panela, explain nutritional benefits, and maintain a premium, warm, helpful brand voice. ALWAYS RESPOND IN ENGLISH.";

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userQuery,
      config: {
        systemInstruction: instruction,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return language === 'es' ? "Tengo problemas para pensar ahora. ¿Por qué no pruebas nuestro Volcán de Panela?" : "I'm having trouble thinking. Why not try our Panela Lava Cake?";
  }
};
