import { checkRemaining } from "../services/rateLimit.js";
import { getRemainingCredits } from "../services/userServices.js";
import { getUserById } from "../utils/user.js";

export default async function getRemaining(req, res) {
  try {
    const { userId } = req.params;

    const { remaining, resetTimeRemaining } = await checkRemaining({ userId });

    return res.status(200).json({
      message: "all goods",
      remaining,
      resetTimeRemaining,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
}
