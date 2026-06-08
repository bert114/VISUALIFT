import express from "express";
import generateImageController from "../controllers/generateImageController.js";
import { idempotency, rateLimit } from "../middlewares/rateLimit.middleware.js";

const router = express.Router();

router.post("/image", idempotency, rateLimit, generateImageController);

export default router;
