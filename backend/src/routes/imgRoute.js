import express from "express";
import { generateImage } from "../controllers/img.js";
import { describeImage } from "../controllers/describe.js";

const router = express.Router();

router.post("/generate", generateImage);

export default router;
