import ERROR_MESSAGES from "../constants/errorMessages.js";

const errorMiddleware = (error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const code = error.code || "SERVER_ERROR";

  console.log(error);

  return res.status(statusCode).json({
    success: false,
    error: {
      code,
      message: ERROR_MESSAGES[code] || ERROR_MESSAGES.SERVER_ERROR,
    },
  });
};

export default errorMiddleware;
