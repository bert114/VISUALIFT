import { successResponse } from "../helper/responseHelper.js";
import { buildFinalPrompt } from "../utils/promptBuilder.js";

export const buildPromptController = async (req, res) => {
  try {
    const data = req.body;

    const text = await buildFinalPrompt(data);

    return successResponse(res, 200, { result: text });
  } catch (error) {
    console.log(error);
  }
};
