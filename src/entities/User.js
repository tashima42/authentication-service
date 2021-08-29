export default function ({ uuidHelper, emailHelper }) {
  return Object.freeze({
    make,
  })

  function make({ email, password }) {
    checkEmail(email)
    checkPassword(password)

    const uuid = uuidHelper.generate()

    return Object.freeze({
      uuid: () => uuid,
      password: () => password,
      email: () => email,
    })

    function checkEmail(email) {
      if (!email) {
        throw new Error("User must have valid email.")
      }
      if (typeof email !== "string") {
        throw new Error("User email must be a string.")
      }
      if (!emailHelper.validate(email)) {
        throw new Error("User email is not valid.")
      }
    }

    function checkPassword(password) {
      if (!password) {
        throw new Error("User must have valid password.")
      }
      if (typeof password !== "string") {
        throw new Error("User password must be a string.")
      }
      if (password.length < 8) {
        throw new Error("User password must be at least 8 characters long.")
      }
    }
  }
}
