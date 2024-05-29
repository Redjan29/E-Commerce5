// backend/config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('e-commerce5', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: console.log, // Ajoutez cette ligne pour voir les requêtes SQL exécutées
});

module.exports = sequelize;
