const { DataTypes } = require('sequelize');
//Instance of our database connection
const sequelize = require('../database') // sequelize instance is in a file

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = User;

