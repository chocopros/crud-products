// GET /products, /products/{id}
// POST /products
// PUT /products/{id}
// PATCH /products/{id}
// DELETE /products/{id}

// Import Propeps Router
const router = require('express').Router()
const { application } = require('express')
// Import services
const productsServices = require('./products.services')


/************ GET *****************/
router.get('/', productsServices.getAllProducts)

router.get ('/:id', productsServices.getProductById)


/************ POST *****************/
router.post('/', productsServices.createProduct) 


/************ PATCH *****************/
router.patch('/:id', productsServices.patchProduct)

/************ DELETE *****************/
router.delete('/:id', productsServices.deleteProduct) //? /movies

module.exports = router

console.log('ROUTER OK!!!')