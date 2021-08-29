import db from "../../models/index"

import buildUserRepository from "./User"
import buildKeyRepository from "./Key"

const User = db.sequelize.models.User
const Key = db.sequelize.models.Key

const userRepository = buildUserRepository({ User })
const keyRepository = buildKeyRepository({ Key })

export {
  userRepository,
  keyRepository,
}