import RateLimit from "../model/rateLimit.js";

export async function idempotency(req, res, next) {
  const key = req.headers["idempotency-key"];

  if (!key) {
    return res.status(400).json({
      error: "Missing Idempotency-Key",
    });
  }

  req.idempotencyKey = key;

  next();
}

export async function rateLimit(req, res, next) {
  const today = new Date().toISOString().slice(0, 10);

  try {
    let rateRecord = await RateLimit.findOne({
      userId: req.body.userId,
      date: today,
    });

    if (rateRecord.count >= 30) {
      return res.status(429).json({
        error: "Daily limit exceeded",
      });
    }

    rateRecord.count += 1;
    await rateRecord.save();

    next();
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}
