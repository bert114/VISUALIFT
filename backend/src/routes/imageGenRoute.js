import express from "express";
import generateImageController from "../controllers/generateImageController.js";

const router = express.Router();

router.post("/image", generateImageController);
export default router;
