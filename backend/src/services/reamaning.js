import { getResetTimeLeft } from "../utils/time.js";
import { getUserValue } from "./userValue.js";

async function getUserRemaining(userId) {
  //   const count = await images.countDocuments({
  //     userId,
  //     createdAt: {
  //       $gte: startOfDay(),
  //     },
  //   });

  //   remaining = Math.max(0, 30 - count);

  //   await redis.setEx(key, 300, remaining);

  //  return remaining;

  const res = await getUserValue({ userId, key: "count" });
  const remaining = 30 - res;
  const resetTime = getResetTimeLeft();
  return { remaining, resetTime };
}

export { getUserRemaining };
