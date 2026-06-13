// Configuration constants
const HOURS_IN_A_DAY = 24;
const MS_PER_HOUR = 1000 * 60 * 60;

/**
 * Resets a user's daily generation count if 24+ hours have passed since their last generation
 * @param {string} userId - The user's unique identifier
 * @returns {Promise<boolean>} True if reset occurred, false otherwise
 */

async function resetDailyCountIfExpired(userId) {
  const lastGeneration = await getLastGeneration(userId);

  if (shouldResetCount(lastGeneration)) {
    await setDailyCountToZero(userId);
    return true;
  }

  return false;
}

/**
 * Retrieves the user's most recent generation record
 * @param {string} userId
 * @returns {Promise<Object|null>} Last generation or null if none exists
 */

async function getLastGeneration(userId) {
  return await database
    .collection("generations")
    .findOne({ userId }, { sort: { createdAt: -1 } });
}

/**
 * Determines if the daily count should be reset
 * @param {Object|null} lastGeneration - User's last generation or null
 * @returns {boolean} True if reset is needed
 */
function shouldResetCount(lastGeneration) {
  if (!lastGeneration) return true;

  const hoursSinceLastGeneration = getHoursSince(lastGeneration.createdAt);
  return hoursSinceLastGeneration > HOURS_IN_A_DAY;
}

/**
 * Calculates hours elapsed between a past timestamp and now
 * @param {Date} pastTimestamp
 * @returns {number} Hours elapsed (can be negative if timestamp is in future)
 */
function getHoursSince(pastTimestamp) {
  const now = new Date();
  const millisecondsElapsed = now - pastTimestamp;
  return millisecondsElapsed / MS_PER_HOUR;
}

/**
 * Sets user's daily generation count to zero, creating record if needed
 * @param {string} userId
 * @returns {Promise<void>}
 */
async function setDailyCountToZero(userId) {
  await database
    .collection("user_limits")
    .updateOne({ userId }, { $set: { dailyCount: 0 } }, { upsert: true });
}
