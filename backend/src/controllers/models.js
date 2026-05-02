import aiModels from "../model/aiModels.js";

export const getModels = async (req, res) => {
  try {
    const models = await aiModels.find().sort({ tier: 1, name: 1 });

    res.status(200).json({
      success: true,
      count: models.length,
      data: models,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
