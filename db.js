const Sequelize = require('sequelize')

const sequelize = new Sequelize('ProjetoPIN','root','root123',
    {
    host: 'localhost',
    dialect: 'mysql'
    }
);

module.exports = sequelize