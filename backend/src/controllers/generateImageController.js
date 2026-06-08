import { errorResponse, successResponse } from "../helper/responseHelper.js";
import { saveLogGeneration } from "../services/generation.js";
import { atomicReserve } from "../services/rateLimit.js";
import {
  getRemainingCredits,
  saveUserRemaining,
} from "../services/userServices.js";

const generateImageController = async (req, res) => {
  try {
    const { discription } = req.body;
    return res.status(200).json({
      message: discription,
    });
  } catch (error) {
    console.log(error);
    return errorResponse(res, 500, error.message);
  }
};

export default generateImageController;
