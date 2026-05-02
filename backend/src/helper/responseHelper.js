export const successResponse = (res, statusCode = 200, data = {}) => {
  return res.status(statusCode).json({
    success: true,
    ...data,
  });
};

export const errorResponse = (
  res,
  statusCode = 500,
  message = "Server error",
  error = null,
) => {
  return res.status(statusCode).json({
    success: false,
    message,
    error,
  });
};
