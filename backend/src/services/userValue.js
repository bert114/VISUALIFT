import RateLimit from "../model/rateLimit.js";
import { getDailyCount } from "./rateLimit.js";

export async function getUserValue({ userId, key = null }) {
  const user = await RateLimit.findOne({ userId });

  if (!user) {
    await createDefaultUser({ userId });

    return 0;
  }

  return getDailyCount({ user });
}

export async function createDefaultUser({ userId }) {
  const date = Date.now();
  await RateLimit.create({
    userId: userId,
    date,
    count: 0,
  });

  return;
}
