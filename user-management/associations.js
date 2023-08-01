const sequelize = require('./database');
const User = require('./models/User');
const Role = require('./models/Role');

// TODO: Define associations here

// Sync all models
sequelize.sync();