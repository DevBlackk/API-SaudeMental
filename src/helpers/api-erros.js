class ErrorMiddleware extends Error {
  constructor (message, statusCode) {
    super(message)
    this.statusCode = statusCode
  }
}

class NotFoundError extends ErrorMiddleware {
  constructor(message) {
    super(message, 404);
  }
}

export { ErrorMiddleware, NotFoundError }