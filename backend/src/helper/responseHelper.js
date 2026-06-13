export const successResponse = (res, statusCode = 200, data = {}) => {
  return res.status(statusCode).json({
    success: true,
    ...data,
    data,
  });
};

export const errorResponse = (res, statusCode = 500) => {
  return res.status(statusCode).json({
    success: false,
    message,
    error,
  });
};
