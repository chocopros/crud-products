//all about the connection


const { Sequelize } = require('sequelize')

// import config of .env on config
const config = require('../config')


//Create a conection to database
const db = new Sequelize({
    dialect: 'postgres', //how sequelize reads the information!!
    host: config.db.host,
    username: config.db.username,
    password: config.db.password,
    database: config.db.name
});

module.exports = db