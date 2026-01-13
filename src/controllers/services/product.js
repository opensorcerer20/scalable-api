const products = [
  { id: 1, name: 'product 1' },
  { id: 2, name: 'product 2' },
]

export const getProducts = async () => {
  return products
}

export const createProduct = async (body) => {
  const { name } = body
  // very simple add product logic
  products.push({ id: products.length + 1, name })
  return products[products.length - 1]
}
