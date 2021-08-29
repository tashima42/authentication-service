export default function ({ Key, keyRepository, userRepository, passwordHelper, jwtHelper }) {
  return async function ({ email, password }) {
    try {
      const user = await userRepository.findByEmail(email)
      if (!user) {
        throw new Error("Invalid user") // TODO: add database error validation
      }
      const userUuid = user.uuid
      const verifyPassword = await passwordHelper.verify(user.password, password)
      if (!verifyPassword) {
        throw new Error("Wrong password")
      }

      const opaqueKey = Key.make({ userUuid })

      const createdOpaqueKey = await keyRepository.insert({
        uuid: opaqueKey.uuid(),
        userUuid,
        key: opaqueKey.key(),
        name: opaqueKey.name(),
        opaque: true
      })
      if (!createdOpaqueKey) {
        throw new Error("Failed to create opaque key") // TODO: add database error validation
      }

      const token = jwtHelper.sign({ uuid: user.uuid, email })
      const refreshToken = createdOpaqueKey.key
      return {
        success: true,
        token,
        refreshToken,
      }
    } catch (error) {
      return {
        success: false,
        message: error
      }
    }
  }
}