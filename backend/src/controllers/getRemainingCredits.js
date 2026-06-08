import { sendSuccessResponse } from "../helper/imageReq.js";
import { successResponse } from "../helper/responseHelper.js";
import { checkRemaining } from "../services/rateLimit.js";
import { getUserRemaining } from "../services/reamaning.js";
import { getRemainingCredits } from "../services/userServices.js";
import { getUserById } from "../utils/user.js";

export default async function getRemaining(req, res) {
  try {
    const { userId } = req.params;

    const { remaining, resetTime } = await getUserRemaining(userId);

    const result = {
      remaining,
      resetTime,
      limit: 30,
    };

    successResponse(res, 200, result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
}
