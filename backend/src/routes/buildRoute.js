import express from "express";
import { buildPromptController } from "../controllers/buildPromptController.js";

const router = express.Router();

router.post("/build", buildPromptController);

export default router;
