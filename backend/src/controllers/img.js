import dotenv from "dotenv";
dotenv.config();

export const generateImage = async (req, res) => {
  try {
    const {
      prompt,
      model = "img4",
      n = 1,
      size = "1024x1024",
      response_format = "url",
    } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required",
      });
    }

    const payload = {
      model,
      prompt,
      n,
      size,
      response_format,
    };

    const response = await fetch(
      `${process.env.INFIP_BASE_URL}/images/generations`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.INFIP_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        success: false,
        error: data,
      });
    }

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Generate image error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong while generating the image",
      error: error.message,
    });
  }
};
