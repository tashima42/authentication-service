export default function ({ createUser }) {
  return async function (httpRequest) {
    try {
      const { email, password } = httpRequest.body
      const created = await createUser({ email, password })
      return {
        statusCode: created.success ? 200 : 400,
        body: created
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: { error }
      }
    }
  }
}