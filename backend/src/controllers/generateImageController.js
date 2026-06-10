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

    console.log("dnudnudnudnudnudnudnudndundundundun");

    const { n, size, prompt, userId } = data;

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

    console.log(isAllowed);

    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });

    return successResponse(res, 200, { result, remaining, isAllowed });
  } catch (error) {
    console.log(error);
    return errorResponse(res, 500, error.message);
  }
};

export default generateImageController;
