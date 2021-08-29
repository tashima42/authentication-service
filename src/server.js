import "dotenv/config"
import app from "./app"
import db from "../models/index"

const port = process.env.PORT || 3000

db.sequelize.authenticate().then(() => {
  console.log("Connected to database")
  app.listen(port, () => {
    console.info(`Listening on http://localhost:${port}`)
  })
})
