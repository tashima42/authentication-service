export default function ({ User, Key, userRepository, keyRepository, jwtHelper, passwordHelper }) {
  return async function ({ email, password }) {
    try {
      const foundUser = await userRepository.findByEmail(email)
      if (foundUser) {
        throw new Error("Email already registered")
      }

      const user = User.make({ email, password })
      const encryptedPassword = await passwordHelper.hash(user.password())
      const createdUser = await userRepository.insert({
        uuid: user.uuid(),
        email: user.email(),
        password: encryptedPassword,
      })
      if (!createdUser) {
        throw new Error("Failed to save user") // TODO: add database error validation
      }

      const key = Key.make({ userUuid: createdUser.uuid })
      const createdOpaqueKey = await keyRepository.insert({
        uuid: key.uuid(),
        userUuid: key.userUuid(),
        key: key.key(),
        name: key.name(),
        opaque: true
      })
      if (!createdOpaqueKey) {
        throw new Error("Failed to create opaque key") // TODO: add database error validation
      }

      const token = jwtHelper.sign({ uuid: createdUser.uuid, email })
      const refreshToken = createdOpaqueKey.key
 
      return {
        success: true,
        createdUser: {
          ...createdUser,
          token,
          refreshToken,
        }
      }
   
    } catch (error) {
      console.log(error)
      return {
        success: false,
        message: error
      }
    }
  }
}