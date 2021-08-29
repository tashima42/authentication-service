export default function ({ uuidHelper }) {
  return Object.freeze({
    make,
  })

  function make({ userUuid, name = "refresh" }) {
    checkUuid(userUuid)
    checkName(name)
    const uuid = uuidHelper.generate()
    const key = uuidHelper.generate()

    return Object.freeze({
      uuid: () => uuid,
      userUuid: () => userUuid,
      key: () => key,
      name: () => name,
    })

    function checkUuid(uuid) {
      if (!uuid) {
        throw new Error("Key must have a valid user uuid.")
      }
      if (typeof uuid !== "string") {
        throw new Error("Key user uuid must be a string.")
      }
      if (!uuidHelper.validate(uuid)) {
        throw new Error("Invalid user uuid type.")
      }
    }
    function checkName(name) {
      if (!name) {
        throw new Error("Key must have a valid name.")
      }
      if (typeof name !== "string") {
        throw new Error("Key name must be a string.")
      }
      if (name.length < 2) {
        throw new Error("Key name must be at least 2 characters long.")
      }
    }
  }
}
