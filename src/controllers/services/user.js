const users = [
  { id: 1, name: 'frank' },
  { id: 2, name: 'jane' },
]

export const getUsers = async () => {
  return users
}

export const createUser = async (body) => {
  const { name } = body
  // very simple add user logic
  users.push({ id: users.length + 1, name })
  return users[users.length - 1]
}
