import express from "express";

import uploadController from "../controllers/uploadController.js";
import upload from "../middlewares/upload.js";

const router = express.Router();

router.post("/upload", upload.single("image"), uploadController);

export default router;
