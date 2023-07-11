const Sequelize = require('sequelize');

//create a new instance of Sequelize
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

//test of the connection
sequelize
    .authenticate()
    .then(() => {
        console.log("Connection established")
    })
    .catch(err => {
        console.log("Error connecting: ", err)
    });

//export the sequleize instance
module.exports = sequelize;
