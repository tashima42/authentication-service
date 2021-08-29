export default function ({ refreshToken }) {
  return async function (httpRequest) {
    try {
      const { refreshToken: token } = httpRequest.body
      const refresh = await refreshToken({ refreshToken: token })
      return {
        statusCode: refresh.success ? 200 : 400,
        body: refresh
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: { error }
      }
    }
  }
}