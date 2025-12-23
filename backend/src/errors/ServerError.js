const HttpError = require("./HttpError");

class ServerError extends HttpError {
  constructor(massage) {
    super(massage, 500);
    this.name = "ServerError";
  }
}

module.exports = ServerError;
