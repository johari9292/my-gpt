import OpenAI from "openai";

export const davinci = async (prompt, key) => {
  const openai = new OpenAI({
    apiKey: key,
    dangerouslyAllowBrowser: true,
  });

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "you're an a AI assistant that replies to all my questions in markdown format.",
      },
      { role: "user", content: "hi" },
      { role: "assistant", content: "Hi! How can I help you?" },
      { role: "user", content: `${prompt}?` },
    ],
    temperature: 0.3,
    max_tokens: 1000,
    top_p: 0.3,
    frequency_penalty: 0.5,
    presence_penalty: 0.2,
  });

  return response;
};
