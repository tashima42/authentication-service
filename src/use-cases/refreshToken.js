export default function ({ Key, keyRepository, userRepository, jwtHelper }) {
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
      const userUuid = user.uuid
      const key = Key.make({ userUuid })
      const newOpaqueToken = await keyRepository.update({
        uuid: opaqueKey.uuid,
        userUuid,
        key: key.key(),
        name: key.name(),
        opaque: true,
      })
      if (!newOpaqueToken) {
        throw new Error("Failed to update refresh token") // TODO: add database error validation
      }
      const token = jwtHelper.sign({ uuid: user.uuid, email: user.email })
      return {
        success: true,
        token,
        refreshToken: newOpaqueToken.key
      }
    } catch (error) {
      return {
        success: false,
        message: error
      }
    }
  }
}