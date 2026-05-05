import { successResponse } from "../helper/responseHelper.js";

const generateImageController = async (req, res) => {
  const body = req.body;

  const result = {
    ...body,
    url: "https://res.cloudinary.com/dmincuczc/image/upload/v1777960306/uploads/file_ritt1j.jpg",
  };

  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });

  return successResponse(res, 200, { result });

  try {
  } catch (error) {}
};

export default generateImageController;
