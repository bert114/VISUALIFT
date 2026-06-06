import User from "../model/userModel.js";
import { getUserById } from "./user.js";

export const MAX_CREDITS = 5;
export const RESET_HOURS = 24;
export const MILLISECONDS_PER_HOUR = 1000 * 60 * 60;

const getCurrentTime = () => new Date();

const addHours = (date, hours) =>
  new Date(date.getTime() + hours * MILLISECONDS_PER_HOUR);

const getHoursDifference = (date1, date2) =>
  (date1 - date2) / MILLISECONDS_PER_HOUR;

const formatTimeRemaining = (milliseconds) => {
  const hours = Math.floor(milliseconds / MILLISECONDS_PER_HOUR);
  const minutes = Math.floor(
    (milliseconds % MILLISECONDS_PER_HOUR) / (1000 * 60),
  );
  return `${hours}h ${minutes}m`;
};

const validateCreditLimit = (credits) => {
  if (credits > MAX_CREDITS) {
    throw new Error(
      `Credit limit exceeded. Maximum allowed is ${MAX_CREDITS}, but got ${credits}`,
    );
  }
  return true;
};

const validateCreditAmount = (credits) => {
  if (credits < 0) {
    throw new Error(`Credit amount cannot be negative. Got: ${credits}`);
  }
  return true;
};

// ========== Credit Reset Logic ==========
const shouldResetCredits = (lastResetDate, now) => {
  if (!lastResetDate) return true;
  const hoursSinceReset = getHoursDifference(now, lastResetDate);
  return hoursSinceReset >= RESET_HOURS;
};

const getResetCreditsValue = () => MAX_CREDITS; // Reset to maximum limit

const getUserCreditsWithReset = async (userId, now) => {
  const user = await getUserById(userId);

  if (!user) {
    await initializeNewUser(userId, now);
    return getResetCreditsValue();
  }

  const lastResetDate = user.lastResetDate
    ? new Date(user.lastResetDate)
    : null;
  const currentCredits = user.remaining ?? getResetCreditsValue();

  // Validate existing credits don't exceed limit (data integrity check)
  validateCreditLimit(currentCredits);

  if (shouldResetCredits(lastResetDate, now)) {
    await updateUserResetDate(userId, now, getResetCreditsValue());
    return getResetCreditsValue();
  }

  return currentCredits;
};

const initializeNewUser = async (userId, now) => {
  await updateUserResetDate(userId, now, MAX_CREDITS);
};

// ========== Credit Consumption Validation ==========
const validateSufficientCredits = (
  currentCredits,
  requiredCredits,
  lastResetDate,
  now,
) => {
  validateCreditAmount(requiredCredits);

  if (currentCredits >= requiredCredits) return;

  const resetTimeInfo = getResetTimeInfo(lastResetDate, now);
  throw new Error(
    `Insufficient credits. You have ${currentCredits} generation(s) remaining. ` +
      `Maximum limit is ${MAX_CREDITS} credits per ${RESET_HOURS} hours. ` +
      `Reset available in ${resetTimeInfo.timeUntilReset}`,
  );
};

const getResetTimeInfo = (lastResetDate, now) => {
  if (!lastResetDate) {
    return {
      nextResetTime: addHours(now, RESET_HOURS),
      timeUntilReset: formatTimeRemaining(RESET_HOURS * MILLISECONDS_PER_HOUR),
    };
  }

  const nextResetTime = addHours(lastResetDate, RESET_HOURS);
  const timeUntilResetMs = nextResetTime - now;

  return {
    nextResetTime,
    timeUntilReset: formatTimeRemaining(timeUntilResetMs),
  };
};

export const updateUserResetDate = async (userId, resetDate) => {
  return await User.findByIdAndUpdate(
    userId,
    {
      lastResetDate: resetDate,
      remaining: 5,
    },
    { returnDocument: "after" },
  );
};

export {
  getCurrentTime,
  addHours,
  getHoursDifference,
  formatTimeRemaining,
  validateCreditLimit,
  validateCreditAmount,
  shouldResetCredits,
  getResetCreditsValue,
  getUserCreditsWithReset,
  initializeNewUser,
  validateSufficientCredits,
  getResetTimeInfo,
};
