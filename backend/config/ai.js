const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env"), override: true });
require("dotenv").config({ override: true }); // Fallback for root execution

const OpenAI = require("openai");

if (!process.env.OPENAI_API_KEY) {
  console.error("CRITICAL: OPENAI_API_KEY is not defined in the environment variables!");
}

const openAI = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENAI_API_KEY || "missing_key",
  defaultHeaders: {
    "HTTP-Referer": process.env.FRONTEND_URL || "http://localhost:5173",
    "X-Title": "Notebook AI Assistant",
  },
});

const getAIResponse = async (userMessage, systemRules) => {
  const model = process.env.AI_MODEL || "gpt-4o-mini";
  const temperature = 0.7;

  // console.log(userMessage, systemRules);

  try {
    const response = await openAI.chat.completions.create({
      model,
      messages: [
        { role: "system", content: systemRules || "" },
        { role: "user", content: userMessage },
      ],
      temperature,
    });

    // console.log(response);

    let message = response?.choices?.[0]?.message?.content;

    if (message && message.includes("```json")) {
      message = message.replace(/```json|```/g, "").trim();
    }

    if (message) {
      // Extract only the JSON object in case of <think> blocks
      const startIndex = message.indexOf("{");
      const endIndex = message.lastIndexOf("}");
      if (startIndex !== -1 && endIndex !== -1) {
        message = message.substring(startIndex, endIndex + 1);
      }
    } else {
      throw new Error("AI returned an empty response.");
    }

    console.log("RAW MESSAGE BEFORE PARSE:", message);
    message = await JSON.parse(message);
    // console.log(message);

    return message;
  } catch (err) {
    console.error("getAIResponse error:", err?.message || err);
    return null;
  }
};

module.exports = {
  getAIResponse,
};
