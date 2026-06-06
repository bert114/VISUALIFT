import { getUserById } from "../utils/user.js";

async function checkRemaining({ userId }) {
  const today = null;

  const user = await getUserById(userId);

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

  // Fix: Convert string timestamp to proper Date if needed
  let lastReset = null;

  if (lastResetTime) {
    // Check if it's a timestamp string like '86400000'
    if (typeof lastResetTime === "string" && !isNaN(Number(lastResetTime))) {
      // If it's a timestamp, create a date by subtracting from now
      const msAgo = Number(lastResetTime);
      lastReset = new Date(now.getTime() - msAgo);
    } else {
      // Otherwise treat as date string
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
      // Calculate remaining time
      const remainingMs = twentyFourHours - timeSinceLastReset;
      resetTimeRemaining = {
        hours: Math.floor(remainingMs / (60 * 60 * 1000)),
        minutes: Math.floor((remainingMs % (60 * 60 * 1000)) / (60 * 1000)),
        seconds: Math.floor((remainingMs % (60 * 1000)) / 1000),
        totalMs: remainingMs,
      };
    }
  }

  // Reset if needed
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

export { checkRemaining };
