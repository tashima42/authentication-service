import jwt from "jsonwebtoken"
const secretToken = process.env.TOKEN_KEY
export default function () {
  return Object.freeze({
    sign,
    decode,
  })
  function sign({ uuid, email }) {
    return jwt.sign(
      { uuid, email },
      secretToken,
      { expiresIn: "2h" }
    )
  }
  function decode(token) {
    return jwt.verify(token, secretToken)
  }
}