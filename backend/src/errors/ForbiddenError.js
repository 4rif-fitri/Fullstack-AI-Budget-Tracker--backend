const HttpError = require("./HttpError");

class ForbiddenError extends HttpError {
  constructor(massage) {
    super(massage, 404);
    this.name = "ForbiddenError";
  }
}

module.exports = ForbiddenError;
