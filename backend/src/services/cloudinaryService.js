import uploadController from "../controllers/uploadController.js";
import Upload from "../model/uploadModel.js";
import { bufferToBase64 } from "../utils/imageUtils.js";

export const saveDb = async (file, uploadResult) => {
  const { originalname, mimetype, size, path, filename } = file;

  const data = await Upload.create({
    originalName: originalname,
    mimeType: mimetype,
    size: size,
    url: uploadResult.secure_url,
    publicId: uploadResult.public_id,
  });

  return data;
};
