import {
  authorizeUser,
  createUser,
  refreshToken,
  createKey
} from "../use-cases/index"

import buildAuthorizeUser from "./AuthorizeUser"
import buildCreateUser from "./CreateUser"
import buildRefreshToken from "./RefreshToken"
import buildCreateKey from "./CreateKey"

const AuthorizeUser = buildAuthorizeUser({ authorizeUser })
const CreateUser = buildCreateUser({ createUser })
const RefreshToken = buildRefreshToken({ refreshToken })
const CreateKey = buildCreateKey({ createKey })

export {
  AuthorizeUser,
  CreateUser,
  RefreshToken,
  CreateKey,
}
