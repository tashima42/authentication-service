export default function buildCollection({ uuidHelper }) {
  return function makeCollection({ userUuid, title }) {
    checkUserUuid(userUuid)
    checkTitle(title)

    return {
      userUuid,
      title
    }
  }

  function checkUserUuid(userUuid) {
    if (!userUuid) {
      throw new Error("Collection must have valid userUuid.")
    }
    if (typeof userUuid !== "string") {
      throw new Error("Collection's userUuid must be a string.")
    }
    if (!uuidHelper.validate(userUuid)) {
      throw new Error("Collection's userUuid is not in a valid format")
    }
  }

  function checkTitle(title) {
    if (!title) {
      throw new Error("Comic must have valid title.")
    }
    if (typeof title !== "string") {
      throw new Error("Comic's title must be a string.")
    }
    if (title.length <= 10) {
      throw new Error("Comic's title must be at least 10 characters long.")
    }
  }
}
