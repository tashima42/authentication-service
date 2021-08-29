export default function ({ keyRepository, userRepository, jwtHelper }) {
  return async function ({ refreshToken }) {
    try {
      const opaqueKey = await keyRepository.findByKey(refreshToken)
      if (!opaqueKey) {
        throw new Error("Invalid refresh token") // TODO: add database error validation
      }
      const user = await userRepository.findByUuid(opaqueKey.userUuid)
      if (!user) {
        throw new Error("Failed to find user") // TODO: add database error validation
      }
      const token = jwtHelper.sign({ uuid: user.uuid, email: user.email })
      return {
        success: true,
        token
      }
    } catch (error) {
      return {
        success: false,
        message: error
      }
    }
  }
}