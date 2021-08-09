import * as argon2 from 'argon2'

async function hash(password) {
  return await argon2.hash(password)
}

async function verify(hash, password) {
  return await argon2.verify(hash, password)
}

export default {
  hash,
  verify
}
