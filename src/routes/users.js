import express from 'express'

const router = express.Router()

router.get('/', (req, res) => res.send('Welcome to the users API'))
router.get('/:id', (req, res) =>
  res.send(`Fetching user with id ${req.params.id}`)
)

export { router }
