import { v4 as uuidv4, validate as uuidValidate } from "uuid"

function generate() {
  return uuidv4()
}

function validate(uuid) {
  return uuidValidate(uuid)
}

export default {
  generate,
  validate
}
