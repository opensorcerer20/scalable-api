import express from 'express'

import { router as productRouter } from './routes/product.js'
import { router as userRouter } from './routes/user.js'

const app = express()
app.use(express.json())
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)

export default app
