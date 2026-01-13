import express from 'express'

import * as productController from '../controllers/product.js'

const router = express.Router()

router.get('/', productController.getAllProducts)

router.post('/', productController.createProduct)

export { router }
