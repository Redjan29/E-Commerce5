const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const sequelize = require('./config/database');
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev')); // Ajoutez cette ligne pour utiliser morgan
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// Configurer Express pour servir des fichiers statiques
app.use('/images', express.static(path.join(__dirname, 'public/images')));

sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch(err => console.log(err));

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

module.exports = app;
