function throwError(code, statusCode = 500, details = null) {
  const error = new Error(code);

  console.log(error);

  error.code = code;
  error.statusCode = statusCode;
  error.details = details;

  throw error;
}

export default throwError;
