const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodecomplete','root','Zse45rdx!',
{
    dialect: 'mysql', 
    host:'localhost'
});



module.exports = sequelize;