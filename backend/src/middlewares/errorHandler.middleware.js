// errorHandler.middleware
let HttpError = require("../errors/HttpError");

function errorHandler(error, req, res, next) {
  if (error instanceof HttpError) {
    res.status(error.statusCode).json({
      success: false,
      massage: error.massage,
    });
    return;
  }

  if (process.env.NODE_ENV == "development") {
    if (error instanceof Error) {
      res.status(500).json({
        success: false,
        massage: error.massage,
      });
    }
  }
  console.error(error);

  return res.status(500).json({
    success: false,
    massage: "Server Error",
  });
}
module.exports = errorHandler;
