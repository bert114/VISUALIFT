import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import imgRoute from "./src/routes/imgRoute.js";
import visionRoute from "./src/routes/visionRoute.js";
import modelRoute from "./src/routes/modelRoute.js";
import uploadRoute from "./src/routes/uploadRoute.js";
import connectDB from "./src/config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

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

connectDB();

app.use("/api/images", imgRoute);
app.use("/api/user", uploadRoute);
app.use("/api/vision", visionRoute);
app.use("/api/models", modelRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
