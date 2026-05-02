import { buildFinalPrompt } from "../utils/promptBuilder.js";

export const buildPromptController = async (req, res) => {
  try {
    const data = await req.body;

    const prompt = data.prompt;
    const userPref = data.userPref;

    const text = await buildFinalPrompt(prompt, userPref);
    console.log(text);

    res.json({ success: true, data: text });
  } catch (error) {
    console.log(error);
  }
};
