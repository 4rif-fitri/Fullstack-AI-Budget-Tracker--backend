const HttpError = require("./HttpError");

class NotFound extends HttpError{
	constructor(massage = "Not Found"){
		super(massage,404)
		this.name = "NotFoundError"
	}
}

module.exports = NotFound