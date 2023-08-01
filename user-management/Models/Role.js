const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // sequelize instance is in a file called 'database.js'

const Role = sequelize.define('Role', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});

module.exports = Role;