import User from "../model/userModel.js";
import {
  getCurrentTime,
  getResetTimeInfo,
  getUserCreditsWithReset,
  MAX_CREDITS,
  RESET_HOURS,
  validateSufficientCredits,
} from "../utils/time.js";
import { getUserById } from "../utils/user.js";

export const saveUserRemaining = async ({ userId, remaining }) => {
  const data = await User.create({
    userId,
    remaining: remaining + 1,
  });

  return data;
};

export const getRemainingCredits = async ({ userId, n = 1 }) => {
  const now = getCurrentTime();
  const requiredCredits = n;

  if (requiredCredits > MAX_CREDITS) {
    throw new Error(
      `Cannot request more than ${MAX_CREDITS} credits at once. Requested: ${requiredCredits}`,
    );
  }

  const currentCredits = await getUserCreditsWithReset(userId, now);
  const user = await getUserById(userId); // add a function to get user by ID
  const lastResetDate = user?.lastResetDate
    ? new Date(user.lastResetDate)
    : null;

  validateSufficientCredits(
    currentCredits,
    requiredCredits,
    lastResetDate,
    now,
  );

  const remainingCredits = currentCredits - requiredCredits;
  const resetInfo = getResetTimeInfo(lastResetDate, now);

  const finalRemaining = Math.min(remainingCredits, MAX_CREDITS);

  return {
    remaining: finalRemaining,
    used: requiredCredits,
    resetAt: resetInfo.nextResetTime,
    maxLimit: MAX_CREDITS,
    resetHours: RESET_HOURS,
  };
};
