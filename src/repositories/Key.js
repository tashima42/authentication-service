export default function ({ Key }) {
  return Object.freeze({
    insert,
    update,
    findByKey,
  })

  async function insert({ uuid, userUuid, key, name, opaque }) {
    const insertedKey = await Key.create({ uuid, userUuid, key, name, opaque })
    return insertedKey ? insertedKey.dataValues : null
  }
  async function update({ uuid, userUuid, key, name, opaque }) {
    const foundKey = await Key.findOne({ where: { uuid, userUuid, opaque } })
    if (!foundKey) {
      return null
    }
    const updatedKey = await foundKey.update({ key, name })
    return updatedKey ? updatedKey.dataValues : null
  }
  async function findByKey(key) {
    const foundKey = await Key.findOne({ where: { key } })
    return foundKey ? foundKey.dataValues : null
  }
}
