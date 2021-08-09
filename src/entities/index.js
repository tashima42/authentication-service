import uuidHelper from "../utils/uuidHelper"
import passwordHelper from "../utils/passwordHelper"

import buildUser from "./user"

const user = buildUser({ uuidHelper, passwordHelper })

export {
  user
}
