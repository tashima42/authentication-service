export default function ({ authorizeUser }) {
  return async function (httpRequest) {
    try {
      const { email, password } = httpRequest.body
      const authorized = await authorizeUser({ email, password })
      return {
        statusCode: authorized.success ? 200 : 400,
        body: authorized
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: { error }
      }
    }
  }
}