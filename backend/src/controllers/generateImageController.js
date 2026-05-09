import { errorResponse, successResponse } from "../helper/responseHelper.js";

const generateImageController = async (req, res) => {
  const data = req.body;

  const { n, size, prompt } = data;

  const imageUrl =
    "https://res.cloudinary.com/dmincuczc/image/upload/v1777960306/uploads/file_ritt1j.jpg";

  const result = {
    ...data,
    images: Array.from({ length: n }, () => ({
      url: imageUrl,
    })),
  };

  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

  return successResponse(res, 200, { result });

  try {
  } catch (error) {
    return errorResponse(
      res,
      500,
      "An error occurred while generating the image.",
    );
  }
};

export default generateImageController;
