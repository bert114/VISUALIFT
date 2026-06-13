export const bufferToBase64 = (buffer) => {
  if (!buffer) {
    throw new Error("Image buffer is required");
  }

  return buffer.toString("base64");
};
