import express from "express";
import saveImages from "../model/saveImageModel.js";

const router = express.Router();

router.post("/save-image", async (req, res) => {
  console.log(req.body);
  try {
    const { userId } = req.body;
    const { imageUrl, prompt } = req.body;

    const savedImage = saveImages.create({
      userId,
      imageUrl,
      prompt,
    });
    res.json({ id: savedImage.insertedId, imageUrl, prompt });
  } catch (error) {
    console.log(error);
  }
});

router.get("/history/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    const images = await saveImages.find({ userId }).sort({ savedAt: -1 });
    console.log(images);
    res.json({ images });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/api/images/:id", async (req, res) => {
  const { userId } = req;
  const { id } = req.params;

  await db.collection("savedimages").deleteOne({
    _id: new ObjectId(id),
    userId,
  });

  res.json({ success: true });
});

export default router;
