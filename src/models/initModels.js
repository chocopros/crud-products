// It will import all the models that we have, all the tables, it will contain the relationships of the tables

const Products = require('./products.models')

//function that the topic of relationships will have
const initModels = () => {
    Products
    console.log('initModels OK!!!')
}

module.exports = initModels