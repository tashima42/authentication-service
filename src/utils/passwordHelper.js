import * as argon2 from 'argon2'

export default function () {
  return Object.freeze({
    hash,
    verify,
  })
  async function hash(password) {
    return await argon2.hash(password)
  }

  async function verify(hash, password) {
    return await argon2.verify(hash, password)
  }
}
