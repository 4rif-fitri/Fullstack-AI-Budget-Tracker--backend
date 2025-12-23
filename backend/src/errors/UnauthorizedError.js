const HttpError = require("./HttpError");

class UnauthorizedError extends HttpError {
  constructor(massage) {
    super(massage, 401);
    this.name = "UnauthorizedError";
  }
}

module.exports = UnauthorizedError;
