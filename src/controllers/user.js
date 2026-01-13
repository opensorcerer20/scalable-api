import * as userService from './services/user.js'

export const getAllUsers = async (req, res) => {
  const users = await userService.getUsers()
  res.json(users)
}

export const createUser = async (req, res) => {
  const newUser = await userService.createUser(req.body)
  res.status(201).json({ newUser, message: 'Success!' })
}
