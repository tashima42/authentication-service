import * as EmailValidator from 'email-validator'

export default function () {
  return Object.freeze({
    validate,
  })
  function validate(email) {
    return EmailValidator.validate(email)
  }
}
