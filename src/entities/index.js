import buildUuidHelper from "../utils/uuidHelper"
import buildPasswordHelper from "../utils/passwordHelper"
import buildEmailHelper from "../utils/emailHelper"

import buildUser from "./User"
import buildKey from "./Key"

const uuidHelper = buildUuidHelper()
const passwordHelper = buildPasswordHelper()
const emailHelper = buildEmailHelper()

const User = buildUser({ uuidHelper, passwordHelper, emailHelper })
const Key = buildKey({ uuidHelper })

export {
  User,
  Key,
}
