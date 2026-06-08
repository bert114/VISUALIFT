import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import imgRoute from "./src/routes/imgRoute.js";
import visionRoute from "./src/routes/visionRoute.js";
import modelRoute from "./src/routes/modelRoute.js";
import uploadRoute from "./src/routes/uploadRoute.js";
import connectDB from "./src/config/db.js";
import buildRoute from "./src/routes/buildRoute.js";
import imageGenRoute from "./src/routes/imageGenRoute.js";
import errorMiddleware from "./src/middlewares/erros.js";
import notFoundMiddleware from "./src/middlewares/notFoundMiddleware .js";
import env from "./env.js";
import { checkExternalServices } from "./healthcheck.js";
import UploadImageDb from "./src/model/uploadModel.js";
import saveImageModel from "./src/model/saveImageModel.js";
import remainingRoute from "./src/routes/remaining.js";
import {
  prepareImageDocument,
  sendErrorResponse,
  sendSuccessResponse,
  validateImageRequest,
} from "./src/helper/imageReq.js";
import RateLimit from "./src/model/rateLimit.js";
dotenv.config();

const app = express();

await checkExternalServices();

const PORT = env.PORT;

const allowedOrigins = [
  "http://localhost:5173",
  "https://lami-si-penans.onrender.com",
].filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Backend is running" });
});

app.use("/api/images", imgRoute);
app.use("/api/user", uploadRoute);
app.use("/api/vision", visionRoute);
app.use("/api/models", modelRoute);
app.use("/api/prompt", buildRoute);

// bago inin
app.use("/api", remainingRoute);

app.use("/api/generate", imageGenRoute);

app.use(errorMiddleware);
app.use(notFoundMiddleware);

app.listen(env.PORT, () => {
  console.log(`Server running on port ${env.PORT}`);
});

// await RateLimit.create({
//   userId: "user_123",
//   date: "2025-06-18",
//   count: 5,
// });
