import express from "express";
import { getModels } from "../controllers/models.js";

const router = express.Router();

router.get("/", getModels);

export default router;
