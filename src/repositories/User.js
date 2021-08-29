export default function ({ User }) {
  return Object.freeze({
    insert,
    findByEmail,
    findByUuid,
  })

  async function insert({ uuid, email, password }) {
    const insertedUser = await User.create({ uuid, email, password })
    return insertedUser ? insertedUser.dataValues : null
  }
  async function findByEmail(email) {
    const foundUser = await User.findOne({ where: { email } })
    return foundUser ? foundUser.dataValues : null
  }
  async function findByUuid(uuid) {
    const foundUser = await User.findOne({ where: { uuid } })
    return foundUser ? foundUser.dataValues : null
  }
}
