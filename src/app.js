import express from 'express'

import { router as productRouter } from './routes/product.js'
import { router as userRouter } from './routes/user.js'

const app = express()
app.use(express.json())
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
/*
***const express = require('express')
const app = express()
const userRoutes = require('./routes/user.routes')
const productRoutes = require('./routes/product.routes') app.use(express.json())
app.use('/api/users', userRoutes)
app.use('/api/products', productRoutes) module.exports = app***

*/

export default app
