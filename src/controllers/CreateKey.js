export default function ({ createKey }) {
  return async function (httpRequest) {
    try {
      const { name } = httpRequest.body
      const { uuid } = httpRequest.context
      const created = await createKey({ userUuid: uuid, name })
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