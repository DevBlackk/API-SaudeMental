import jsonwebtoken from "jsonwebtoken"

export function ensureAuthenticated(request, response, next) {
  const authToken = request.headers.authorization

  if (!authToken) { 
    return response.status(401).json({
      message: "Token is missing"
    })
  }

  const [, token] = authToken.split(" ")

  try {
    jsonwebtoken.verify(token, "34aa582c-d6d0-4a4f-9472-6702c5dbd2ec")
    next()
  } catch (error) {
    return response.status(401).json({
      message: "Token invalid"
    })
  }
}