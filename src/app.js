/******************************ALL IMPORTS*************************************/
//import express
const express = require('express')
// import my initModels relations tables
const initModels = require('./models/initModels')
// import my sensible info
const config = require('./config')
//import Routes
const productsRouter = require('./products/products.routers')


/********************************** INIT  ******************************************* */
//initialize express
const app = express()

//Ability JSON format for receive
app.use(express.json())

//Ability req in Home
app.get('/', (req, res) => {
  res.status(200).json({
    message: "Server Started now!!!",
    AllMovies: 'http://127.0.0.1:9000/products',
    CreateBy: 'Jesus Arechider'

  })
})

//Ability Routes
app.use('/products', productsRouter) // <-- asignament prefije

/********************** DATABASE ********************************/
//* First Db Authetication y next process in order Sycronyzate tables
//import database conections
const db = require('./utils/database')

//1-DB Authetication with info in ./database
db.authenticate()
  .then(() => console.log('DB Authetication Succesfull y'))
  .catch(err => console.log(err))

//2-second Sycronyzate the models and create the tables
db.sync()
  .then( () => console.log('synchronized database'))
  .catch( err => console.log(err))

initModels()



/********************** LISTEN SERVER *****************************/ 
//start listing
app.listen(config.port, () => {
  console.log(`Server started in PORT: ${config.port}!`)
});