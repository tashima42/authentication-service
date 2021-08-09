import express from "express"
import cors from "cors"
const app = express()

import passwordHelper from "./utils/passwordHelper"

app.use(cors())

app.get("/", (req, res) => {
  passwordHelper.hash("password").then(hash => {
    passwordHelper.verify(hash, "password").then(verify => {
      res.status(200).send("Hello, World!\n" + hash + "\n" + verify)
    })
  })
})

export default app
