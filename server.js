import 'dotenv/config'

import express from 'express'

import { router as userRouter } from './src/routes/users.js'

const app = express()
const port = process.env.PORT || 3000

// verify api key via x-api-key

//app.use(express.json())

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`)
  next()
})

app.use('/users', userRouter)

app.use(express.static('public'))

app.use((err, req, res, next) => {
  // handle THROWN errors (not returned error statuses)
  console.error(err.stack) // Log the error stack for debugging
  res.status(500).send('Something broke!') // Send a generic error response
})

process.on('SIGTERM', () => {
  console.log('Shutting down...')
  server.close(() => console.log('Server closed'))
})

/////

app.get('/', (req, res) => {
  res.send('Welcome to your new backend!')
})

app.get('/submit', (req, res) => {
  const query = { ...req.query }
  console.log(query)
  res.status(201).send('Data received!')
})

app.post('/submit', (req, res) => {
  console.log(req.body)
  res.status(201).send('Data received!')
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
