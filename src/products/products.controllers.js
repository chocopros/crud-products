//import express
const { response } = require('express');
//conect postgress
const { where } = require('sequelize');
//generator uuid
const uuid = require('uuid');


//imports products models for to make request
const Products = require('../models/products.models')



/***************** GET MOVIES IN DATABASE *****************/
//>> select * from movies
const getAllTotalsProducts = async () => {

  const data = await Products.findAll() // get all products existens

  return data
};

// TEST GET ALL PRODUCTS
// getAllProducts()
//   .then(res => console.log(res))
//   .catch(err => console.log(err))
// // Test EXAMPLE --> node ./src/movies/movies.controlles.js

/***************** GET MOVIE BY ID OR OTHER *****************/
//Select * from movies where id = id;
const getProductId = async (id) => {
  const data = await Products.findOne({
    where: {
      id: id
    },
  });
  return data
};

// TEST getMovieById
// getProductById('c4d40087-fa1d-4c67-8372-11d64e94688e')
//   .then(res => console.log(res))
//   .catch(err => console.log(err))



/***************** >>CREATE FILM IN DATABASE<< *****************/
//>> insert into movies (id,name,denre, duration, release Data) values (uuid.v4, data.name , etc)
const createNewProduct = async (data) => {

  const uuidGenerate = uuid.v4()

  const newProduct = await Products.create({

    id: uuidGenerate,
    name: data.name,
    price: data.price,
    category: data.category,
    isAvailable: data.isAvailable,
    registerDate: data.registerDate,
    linkProduct: `http://127.0.0.1:9000/products/${uuidGenerate}`
  });
  return newProduct
};

//TEST CREATE PRODUCT
// createProduct(
//   {
//     name: 'Aceite',
//     price: 4000,
//     category: 'cocina',
//     isAvailable: true,
//     registerDate: '2033/03/12'
//   }
// )
//   .then(res => console.log(res))
//   .catch(err => console.log(err))



//**************************** >>PACTH FILM<< *****************************/

const editProductId =  async (id, data) => {
  const response  = await Products.update (data, {
    where: {
      id: id
    }
  });
  return response
};

// TEST UPDATE
// editProduct('c4d40087-fa1d-4c67-8372-11d64e94688e', {
//   name: 'Atun',
// }).then(response => {
//   console.log(response)
// }).catch(err => {
//   console.log(err)
// })

//**************************** >>DELETE MOVIE<< *****************************/

const deleteProductId = async (id) => {
  const data = await Products.destroy({
    where: {
      id: id
    }
  });
  return data
};

module.exports = {
  getAllTotalsProducts,
  getProductId,
  createNewProduct,
  editProductId,
  deleteProductId
}

console.log('CONTROLLERS OK!!!')