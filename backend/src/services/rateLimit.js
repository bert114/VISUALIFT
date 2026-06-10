import RateLimit from "../model/rateLimit.js";
import User from "../model/userModel.js";
import throwError from "../utils/throwErrors.js";
import { getUserById } from "../utils/user.js";
import { createUser } from "./userServices.js";

async function checkRemaining({ userId }) {
  const today = null;

  console.log(today);

  const user = await getUserById(userId);

  if (!user) {
    const newUser = await createUser({ userId });

    return newUser;
  }

  const { lastReset, remaining } = user;

  const { resetTimeRemaining } = await remainingTime(lastReset);

  console.log(resetTimeRemaining);

  return { remaining, resetTimeRemaining };
}

async function getCountByUserId({ userId }) {
  const user = await getUserById(userId);

  const { remaining } = user;

  return { remaining };
}

async function remainingTime(lastResetTime) {
  const now = new Date();

  let lastReset = null;

  if (lastResetTime) {
    if (typeof lastResetTime === "string" && !isNaN(Number(lastResetTime))) {
      const msAgo = Number(lastResetTime);
      lastReset = new Date(now.getTime() - msAgo);
    } else {
      lastReset = new Date(lastResetTime);
    }
  }

  const nextResetTime = lastReset
    ? new Date(lastReset.getTime() + 24 * 60 * 60 * 1000)
    : null;

  // Calculate time remaining until next reset
  let resetTimeRemaining = null;
  let shouldReset = false;

  if (!lastReset) {
    // First time - need to initialize
    shouldReset = true;
  } else {
    const timeSinceLastReset = now - lastReset;
    const twentyFourHours = 24 * 60 * 60 * 1000;

    if (timeSinceLastReset >= twentyFourHours) {
      shouldReset = true;
    } else {
      const remainingMs = twentyFourHours - timeSinceLastReset;
      resetTimeRemaining = {
        hours: Math.floor(remainingMs / (60 * 60 * 1000)),
        minutes: Math.floor((remainingMs % (60 * 60 * 1000)) / (60 * 1000)),
        seconds: Math.floor((remainingMs % (60 * 1000)) / 1000),
        totalMs: remainingMs,
      };
    }
  }

  if (shouldReset) {
    const DEFAULT_COUNT = 10;
    const newResetTime = new Date();

    // await updateUser(userId, {
    //   remaining: DEFAULT_COUNT,
    //   lastResetTime: newResetTime, // Store as actual Date
    // });

    resetTimeRemaining = {
      hours: 24,
      minutes: 0,
      seconds: 0,
      totalMs: 24 * 60 * 60 * 1000,
    };
  }

  return { resetTimeRemaining, shouldReset };
}

const atomicReserve = async ({ userId, n = 1 }) => {
  const user = await User.findById(userId);

  const currentRemaining = parseInt(user.remaining);

  if (currentRemaining < n) {
    throw new Error(`Only ${currentRemaining} remaining`);
  }

  user.remaining = (currentRemaining - n).toString();
  await user.save();

  const condition = IsAllowed(parseInt(user.remaining));

  return {
    success: true,
    remaining: parseInt(user.remaining),
    isAllowed: condition,
  };
};

const IsAllowed = (remaining) => {
  return remaining <= 0 ? false : true;
};

export async function getDailyCount({ user }) {
  const now = new Date();
  const lastUpdate = user.updatedAt;
  const hoursSinceLastUpdate = (now - lastUpdate) / (1000 * 60 * 60);

  if (hoursSinceLastUpdate >= 24) {
    user.count = 0;
    await user.save();
    return 0;
  }

  return user.count || 0;
}

export { checkRemaining, atomicReserve };
