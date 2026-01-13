import User from '#models/user.js'

export const getUsers = async () => {
  try {
    const users = await User.find()
    return users
  } catch (error) {
    throw new Error(`Error fetching users: ${error.message}`)
  }
}

export const createUser = async (body) => {
  const { name } = body
  const newUser = await User.create({ name })
  return newUser
}
