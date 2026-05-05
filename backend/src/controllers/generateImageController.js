import { successResponse } from "../helper/responseHelper.js";

const generateImageController = async (req, res) => {
  const body = req.body;

  const data = {
    ...body,
    url: "https://res.cloudinary.com/dmincuczc/image/upload/v1777960306/uploads/file_ritt1j.jpg",
  };

  return successResponse(res, 200, { result: data });

  try {
  } catch (error) {}
};

export default generateImageController;
