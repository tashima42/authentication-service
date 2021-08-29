export default function ({ Key, keyRepository }) {
  return async function ({ userUuid, name }) {
    try {
      const key = Key.make({ userUuid, name })

      const createdKey = await keyRepository.insert({
        uuid: key.uuid(),
        userUuid: key.userUuid(),
        key: key.key(),
        name: key.name(),
        opaque: false
      })
      if (!createdKey) {
        throw new Error("Failed to create key") // TODO: add database error validation
      }
      return {
        success: true,
        createdKey,
      }
    } catch (error) {
      return {
        success: false,
        message: error
      }
    }
  }
}