import express from "express";
import { describeImage } from "../controllers/describe.js";
import upload from "../middlewares/upload.js";

const router = express.Router();

router.post("/describe", upload.single("image"), describeImage);

export default router;
