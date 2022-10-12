//import Fuctions of Controllers
const { response } = require('express');
const { getAllTotalsProducts, getProductId, createNewProduct, editProductId, deleteProductId, countTotalProducts } = require('./products.controllers');


//  GET ALL MOVIES 
const getAllProducts = async (req, res) => {
  const count = await countTotalProducts()
  getAllTotalsProducts()
    .then(data => {
      if (data) {
        res.status(200).json({
          GoHome: 'http://127.0.0.1:9000/',
          count_total: count,
          result: data
        })
      } else {
        res.status(400).json({ message: ' Error GET all Products' })
      }
    })
    .catch(err => {
      res.status(400).json({ message: err.message })
    })
};

// GET MOVIE FOR YOUR ID
const getProductById = (req, res) => {

  const id = req.params.id

  getProductId(id)
    .then(data => {
      if (data) {
        res.status(200).json({
          Products: 'http://127.0.0.1:9000/products',
          result_product: data
        })
      } else {
        res.status(404).json({
          pageProducts: 'http://127.0.0.1:9000/products',
          message: 'Invalid ID'
        })
      }
    })
    .catch(err => {
      res.status(404).json({
        pageProducts: 'http://127.0.0.1:9000/products',
        message: err.message
      })
    })
};


// CREATE NEW MOVIES
const createProduct = (req, res) => {

  const data = req.body;

  if (data.name && data.price && data.category && data.isAvailable && data.registerDate) {
    createNewProduct(data)
      .then(response => {
        res.status(201).json(response)
      })
      .catch(err => {
        res.status(400).json({ message: err.message })
      })
  } else {
    res.status(400).json({ message: 'Missing Data Fail Action' })
  }
};


// PATCH MOVIES
//>>Parcial Modification
const patchProduct = (req, res) => {

  const id = req.params.id;
  const { name, price, category, isAvailable, registerDate } = req.body;

  editProductId(id, { name, price, category, isAvailable, registerDate })
    .then((response) => {
      
      if (response[0]) { //El response como respuesta es una arreglo
        res.status(200).json({message: `Product with ID:${id} has modificate`})
      } else {
        res.status(400).json({message: 'Invalid ID'})
      }
  
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
  
};


// DELETE MOVIE
const deleteProduct = (req, res) => {

  const id = req.params.id;

  deleteProductId(id)
    .then(response => {
      if(response){
        res.status(204).json() //normalmente el json vacio .json()
      } else {
        res.status(400).json({message: 'Invalid ID'})
      }
        
    }).catch(err => {
      res.status(400).json({message: err.message})
    })

};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  patchProduct,
  deleteProduct
}

console.log('SERVICES OK!!!')
