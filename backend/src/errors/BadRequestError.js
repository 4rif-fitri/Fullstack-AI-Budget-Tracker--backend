const HttpError = require("./HttpError");

class BadRequestError extends HttpError {
  constructor(massage = "Not Found") {
    super(massage, 400);
    this.name = "BadRequestError";
  }
}

module.exports = BadRequestError;
