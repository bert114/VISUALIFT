const validateRequiredFields = (body, requiredFields) => {
  const missingFields = requiredFields.filter((field) => !body[field]);

  if (missingFields.length > 0) {
    return {
      isValid: false,
      missingFields,
      error: `${missingFields.join(", ")} is required`,
    };
  }

  return { isValid: true };
};

const validateImageRequest = (body) => {
  const requiredFields = ["userId", "imageUrl", "prompt"];
  const validation = validateRequiredFields(body, requiredFields);

  if (!validation.isValid) {
    return {
      error: validation.error,
      received: body,
      statusCode: 400,
    };
  }

  return null;
};

// ===== transformers.js =====
const normalizeGenerationPreferences = (preferences = {}) => ({
  noText: preferences.noText || false,
  whiteBackground: preferences.whiteBackground || false,
  aspectRatio: preferences.aspectRatio || "1:1",
});

const prepareImageDocument = (data) => {
  const {
    userId,
    imageUrl,
    prompt,
    originalPrompt = null,
    generationPreferences = {},
  } = data;

  return {
    userId,
    imageUrl,
    prompt,
    originalPrompt,
    generationPreferences: normalizeGenerationPreferences(
      generationPreferences,
    ),
  };
};

// ===== responseHandlers.js =====
const sendErrorResponse = (res, error, statusCode = 400) => {
  return res.status(statusCode).json({ error });
};

const sendSuccessResponse = (res, data, statusCode = 201) => {
  return res.status(statusCode).json(data);
};

export {
  sendErrorResponse,
  sendSuccessResponse,
  validateImageRequest,
  prepareImageDocument,
};
