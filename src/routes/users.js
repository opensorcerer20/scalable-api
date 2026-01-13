import express from 'express'

const router = express.Router()

router.get('/', (req, res) => res.send('Welcome to the users API'))

router.get('/:id', (req, res) => {
  const { id } = req.params
  if (isNaN(parseInt(id))) {
    res.status(400).send('Invalid id')
    return
  }
  res.send(`Fetching user with id ${id}`)
})

export { router }
