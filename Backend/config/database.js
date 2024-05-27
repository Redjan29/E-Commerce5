// backend/config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('e-commerce5', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
