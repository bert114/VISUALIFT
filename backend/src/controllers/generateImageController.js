import { errorResponse, successResponse } from "../helper/responseHelper.js";
import { saveLogGeneration } from "../services/generation.js";
import { atomicReserve } from "../services/rateLimit.js";
import {
  getRemainingCredits,
  saveUserRemaining,
} from "../services/userServices.js";

const generateImageController = async (req, res) => {
  try {
    const data = req.body;

    const { n, size, prompt, userId } = data;

    console.log("Received request to generate image with data:", data);

    const imageUrl =
      "https://res.cloudinary.com/dmincuczc/image/upload/v1777960306/uploads/file_ritt1j.jpg";

    const result = {
      ...data,
      images: Array.from({ length: n }, () => ({
        url: imageUrl,
      })),
    };

    console.log(data);

    // const remaning = await getRemainingCredits({ userId })
    //

    const { remaining, isAllowed } = await atomicReserve({ userId });

    const {} = await atomicOperation({ userId });

    const rateLimitInfo = {
      remaining,
      isAllowed,
    };

    console.log(isAllowed);

    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });

    const imageGenerationInfo = {
      userId,
      prompt,
      result: "success",
      timestamp: Date.now(),
    };

    const log = await saveLogGeneration({ userId, prompt, result });

    return successResponse(res, 200, {
      result,
      rateLimitInfo,
      log,
    });
  } catch (error) {
    console.log(error);
    return errorResponse(
      res,
      500,
      "An error occurred while generating the image.",
    );
  }
};

export default generateImageController;
