import 'dotenv/config'

import express from 'express'

import { router as userRouter } from './src/routes/users.js'

const app = express()
const port = process.env.PORT || 3000

// verify api key via x-api-key

app.use(express.json())

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`)
  next()
})

app.get('/', (req, res) => {
  res.send('Welcome to your new backend!')
})

app.use('/users', userRouter)

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
