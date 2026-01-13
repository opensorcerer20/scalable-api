import * as productService from '../services/product.js'

export const getAllProducts = async (req, res) => {
  const products = await productService.getProducts()
  res.json(products)
}

export const createProduct = async (req, res) => {
  const newProduct = await productService.createProduct(req.body)
  res.status(201).json({ newProduct, message: 'Success!' })
}
