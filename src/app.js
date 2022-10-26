import express from "express"
import cors from "cors"

import buildJwtHelper from "./utils/jwtHelper"
import callback from "./utils/expressCallback"

import {
  AuthorizeUser,
  CreateUser,
  RefreshToken,
  CreateKey,
} from "./controllers/index"

const jwtHelper = buildJwtHelper()


const app = express()

app.use(cors())
app.use(express.json())

app.use("/public", express.static('src/public'))
app.post("/user/create", callback(CreateUser))
app.post("/user/authorize", callback(AuthorizeUser))
app.post("/user/refresh", callback(RefreshToken))

app.post("/key/create", applyMiddleware(auth, callback(CreateKey)))



// TODO: use proper middleware
function applyMiddleware(middleware, callback) {
  return (req, res, next) => {
    req = middleware(req, res, next)
    callback(req, res, next)
  }
}

function auth(req, res) {
  try {
    const jwt = req.headers.authorization.split("Bearer ")[1]
    const { uuid, email } = jwtHelper.decode(jwt)
    req.context = {}
    req.context.uuid = uuid
    req.context.email = email
    return req
  } catch (error) {
    res.status(401).send({ success: false, message: "Invalid authorization" })
  }
}

export default app

