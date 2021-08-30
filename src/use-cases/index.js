import buildPasswordHelper from "../utils/passwordHelper"
import buildJwtHelper from "../utils/jwtHelper"

import { userRepository, keyRepository } from "../repositories/index"
import { User, Key } from "../entities/index"

import buildCreateUser from "./createUser"
import buildAuthorizeUser from "./authorizeUser"
import buildRefreshToken from "./refreshToken"
import buildCreateKey from "./createKey"

const passwordHelper = buildPasswordHelper()
const jwtHelper = buildJwtHelper()

const createUser = buildCreateUser({ User, Key, userRepository, keyRepository, jwtHelper, passwordHelper })
const authorizeUser = buildAuthorizeUser({ Key, keyRepository, userRepository, passwordHelper, jwtHelper })
const refreshToken = buildRefreshToken({ Key, keyRepository, userRepository, jwtHelper })
const createKey = buildCreateKey({ Key, keyRepository })

export {
  createUser,
  authorizeUser,
  refreshToken,
  createKey,
}
