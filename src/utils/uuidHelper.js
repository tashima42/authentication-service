import { v4 as uuidv4, validate as uuidValidate } from "uuid"

export default function () {
  return Object.freeze({
    generate,
    validate
  })

  function generate() {
    return uuidv4()
  }
  function validate(uuid) {
    return uuidValidate(uuid)
  }
}
