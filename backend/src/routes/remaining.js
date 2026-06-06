import express from "express";
import userAuthMiddleware from "../middlewares/userAuthMiddleware.js";
import getRemaining from "../controllers/getRemainingCredits.js";

const router = express.Router();

router.get("/remaining/:userId", getRemaining);

export default router;
