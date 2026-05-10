const ERROR_MESSAGES = {
  SERVER_ERROR: "Something went wrong on the server. Please try again.",
  ROUTE_NOT_FOUND: "API route was not found.",
  VALIDATION_ERROR: "One or more fields are invalid.",
  REQUEST_BODY_REQUIRED: "Request body is required.",
  INVALID_JSON_BODY: "Request body must be valid JSON.",
  METHOD_NOT_ALLOWED: "This HTTP method is not allowed for this route.",
  RATE_LIMITED: "Too many requests. Please wait and try again.",

  IMAGE_REQUIRED: "Please upload a reference image.",
  ONE_IMAGE_ONLY: "Please upload only one reference image.",
  INVALID_FILE_TYPE: "Only JPG, PNG, and WEBP images are supported.",
  FILE_TOO_LARGE: "Image must be smaller than 10MB.",
  EMPTY_FILE:
    "Uploaded image appears to be empty. Please choose another image.",
  UPLOAD_FAILED: "Image upload failed. Please try again.",
  IMAGE_SAVE_FAILED: "Uploaded image could not be saved. Please try again.",
  IMAGE_PREVIEW_FAILED: "Image was uploaded, but preview could not be created.",
  CONCEPT_TEXT_TOO_LONG: "Concept text must be 500 characters or fewer.",
  INVALID_NO_TEXT_VALUE: "No-text preference must be true or false.",
  INVALID_BACKGROUND:
    "Background must be one of: white, transparent, none, or custom.",
  INVALID_COLOR: "Color preference is invalid.",
  COLOR_TOO_LONG: "Color preference must be 50 characters or fewer.",
  INVALID_ASPECT_RATIO:
    "Aspect ratio must be one of: 1:1, 4:3, 3:4, 16:9, or 9:16.",

  DRAFT_ID_REQUIRED: "draftId is required.",
  INVALID_DRAFT_ID: "draftId is invalid.",
  DRAFT_NOT_FOUND: "Draft was not found.",
  DRAFT_ALREADY_RESET: "Draft has already been reset.",
  DRAFT_EXPIRED: "Draft has expired. Please start again.",
  DRAFT_UPDATE_FAILED: "Draft could not be updated. Please try again.",
  DRAFT_DELETE_FAILED: "Draft could not be deleted. Please try again.",
  RESET_FAILED: "Draft could not be reset. Please try again.",
  GENERATION_IN_PROGRESS: "Cannot reset while image generation is in progress.",

  IMAGE_NOT_FOUND: "No uploaded image exists for this draft.",
  IMAGE_FILE_MISSING:
    "The uploaded image file could not be found. Please upload it again.",
  PROMPT_ALREADY_GENERATING:
    "Prompt enhancement is already running for this draft.",
  GEMINI_API_KEY_MISSING: "Gemini API key is not configured on the server.",
  GEMINI_FAILED: "Prompt enhancement failed. Please try again.",
  GEMINI_TIMEOUT: "Gemini took too long to respond. Please try again.",
  GEMINI_RATE_LIMITED: "Gemini rate limit reached. Please wait and try again.",
  EMPTY_PROMPT_RESPONSE:
    "Gemini did not return a usable prompt. Please try again.",
  PROMPT_SAVE_FAILED: "Enhanced prompt could not be saved. Please try again.",

  EDITED_PROMPT_REQUIRED: "Edited prompt is required before generation.",
  EDITED_PROMPT_TOO_SHORT: "Edited prompt must be at least 10 characters.",
  EDITED_PROMPT_TOO_LONG: "Edited prompt must be 3000 characters or fewer.",
  INVALID_SETTINGS: "One or more generation settings are invalid.",
  PROMPT_NOT_READY:
    "Please enhance and review the prompt before generating images.",

  FINAL_PROMPT_REQUIRED: "Final prompt is required.",
  FINAL_PROMPT_TOO_SHORT: "Final prompt must be at least 10 characters.",
  FINAL_PROMPT_TOO_LONG: "Final prompt must be 3000 characters or fewer.",
  INVALID_IMAGE_COUNT: "Image count must be 3 for the MVP.",
  GENERATION_ALREADY_RUNNING: "A generation is already running for this draft.",
  INFIP_API_KEY_MISSING: "Infip API key is not configured on the server.",
  INFIP_FAILED: "Image generation failed. Please try again.",
  INFIP_TIMEOUT: "Image generation took too long. Please try again.",
  INFIP_RATE_LIMITED:
    "Image generation rate limit reached. Please wait and try again.",
  EMPTY_GENERATION_RESPONSE:
    "Infip did not return any images. Please try again.",
  INVALID_GENERATION_RESPONSE:
    "Infip returned an invalid response. Please try again.",
  GENERATION_SAVE_FAILED:
    "Generated results could not be saved. Please try again.",

  GENERATION_ID_REQUIRED: "generationId is required.",
  INVALID_GENERATION_ID: "generationId is invalid.",
  GENERATION_NOT_FOUND: "Generation was not found.",
  GENERATION_FAILED: "Image generation failed. Please try again.",
  GENERATION_EXPIRED: "Generation has expired. Please start again.",

  GENERATION_NOT_COMPLETED:
    "You can only select images after generation is completed.",
  SELECTED_IMAGE_IDS_REQUIRED: "selectedImageIds is required.",
  INVALID_SELECTED_IMAGE_IDS: "selectedImageIds must be an array.",
  EMPTY_SELECTION: "Please select at least one result.",
  INVALID_IMAGE_ID: "One or more selected image IDs do not exist.",
  SELECTION_SAVE_FAILED:
    "Selected results could not be saved. Please try again.",

  MONGO_URI_MISSING: "MongoDB connection string is not configured.",
  DATABASE_CONNECTION_FAILED: "Database connection failed.",
  UPLOAD_DIR_MISSING: "Upload directory is not configured.",
  UPLOAD_DIR_NOT_WRITABLE: "Upload directory is not writable.",
};

export default ERROR_MESSAGES;
