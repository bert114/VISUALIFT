import ERROR_MESSAGES from "../constants/errorMessages.js";

const notFoundMiddleware = (req, res, next) => {
  const code = "ROUTE_NOT_FOUND";

  const error = new Error(ERROR_MESSAGES[code]);
  error.code = code;
  error.statusCode = 400;

  return res.status(error.statusCode).json({
    success: false,
    error: {
      status: error.statusCode,
      code,
      message: ERROR_MESSAGES[code] || ERROR_MESSAGES.SERVER_ERROR,
    },
  });
};

export default notFoundMiddleware;
