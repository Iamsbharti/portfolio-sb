exports.notFound = (req, res, next) => {
  const error = new Error(`${req.originalUrl} requested path not found`);
  res.status(404);
  next(error);
};
exports.handleError = (error, req, res, next) => {
  const statusCode = res.status === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({ message: error.message });
};
