import env from "../../env.js";
import { isClerkAPIResponseError } from "@clerk/shared/error";

async function userAuthMiddleware(req, res, next) {
  try {
    const apiKey = await clerkClient.apiKeys.verify(env.CLERK_SECRET_KEY);
  } catch (error) {
    if (isClerkAPIResponseError(error)) {
      console.error(error.errors[0]?.message);
    }
    throw error;
  }
}

export default userAuthMiddleware;
