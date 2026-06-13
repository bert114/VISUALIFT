import RateLimit from "../model/rateLimit.js";

export async function idempotency(req, res, next) {
  try {
    const key = req.headers["idempotency-key"];

    console.log(req.body);

    if (!key) {
      return res.status(400).json({
        error: "Missing Idempotency-Key",
      });
    }

    req.idempotencyKey = key;
    req.userId = req.body.userId;

    next();
  } catch (error) {
    console.log(error.message);
  }
}

export async function rateLimit(req, res, next) {
  const today = new Date().toISOString().slice(0, 10);

  try {
    console.log("test user", req.userId);

    let rateRecord = await RateLimit.findOne({
      userId: req.userId,
    });

    console.log("test user", rateRecord);

    if (rateRecord.count >= 30) {
      return res.status(429).json({
        error: "Daily limit exceeded",
      });
    }

    rateRecord.count += 1;
    await rateRecord.save();

    console.log(today);

    next();
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
}
