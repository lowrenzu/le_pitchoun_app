import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function recommendFlavor(userPreference: string) {
  const prompt = `Tu es un expert glacier pour le triporteur "Le Pitchoun".
  Voici notre carte :
  - Basilic Frais (Signature, rafraîchissant, herbacé)
  - Fraise de Plougastel (Fruité, doux, classique)
  - Chocolat Noir (Intense, gourmand, réconfortant)
  - Vanille de Madagascar (Doux, onctueux, traditionnel)
  - Citron Meringué (Acidulé, sucré, gourmand)
  - Pistache de Bronte (Riche, authentique, fruits à coque)

  Le client dit : "${userPreference}"
  Recommande un ou deux parfums de la carte qui correspondent le mieux à son envie. Sois bref, enthousiaste et chaleureux (2 à 3 phrases maximum).`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Désolé, je n'arrive pas à me connecter pour le moment. Mais je vous conseille vivement notre Basilic Frais !";
  }
}

export async function findNearbySpots(lat: number, lng: number) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Trouve 2 ou 3 parcs, places ou endroits agréables à proximité immédiate pour s'asseoir et déguster une glace. Donne une très courte description pour chaque lieu.",
      config: {
        tools: [{ googleMaps: {} }],
        toolConfig: {
          retrievalConfig: {
            latLng: {
              latitude: lat,
              longitude: lng
            }
          }
        }
      }
    });

    return {
      text: response.text,
      chunks: response.candidates?.[0]?.groundingMetadata?.groundingChunks
    };
  } catch (error) {
    console.error("Gemini Maps Error:", error);
    return { text: "Impossible de trouver des lieux pour le moment.", chunks: [] };
  }
}
