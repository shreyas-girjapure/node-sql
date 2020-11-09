const {Sequelize,DataTypes} = require('sequelize');

const db = new Sequelize('nodesql','root','root',{
    dialect:'mysql'
})

module.exports = {db};