const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // sequelize instance is in a file called 'database.js'

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