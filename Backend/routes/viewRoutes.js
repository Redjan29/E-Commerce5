const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware'); // Importer le middleware

// Route pour afficher tous les produits
router.get('/admin/products', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const products = await Product.findAll();
    res.render('admin', { products });
  } catch (error) {
    res.status(500).send('Error retrieving products');
  }
});

// Route pour créer un produit
router.post('/admin/products/create', authMiddleware, adminMiddleware, async (req, res) => {
  const { title, description, image, price } = req.body;
  try {
    await Product.create({ title, description, image, price });
    res.redirect('/admin/products');
  } catch (error) {
    res.status(500).send('Error creating product');
  }
});

// Route pour afficher le formulaire de modification du produit
router.get('/admin/products/edit/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    res.render('editProduct', { product });
  } catch (error) {
    res.status(500).send('Error retrieving product');
  }
});

// Route pour mettre à jour un produit
router.post('/admin/products/update/:id', authMiddleware, adminMiddleware, async (req, res) => {
  const { title, description, image, price } = req.body;
  try {
    await Product.update({ title, description, image, price }, { where: { id: req.params.id } });
    res.redirect('/admin/products');
  } catch (error) {
    res.status(500).send('Error updating product');
  }
});

// Route pour supprimer un produit
router.post('/admin/products/delete/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    await Product.destroy({ where: { id: req.params.id } });
    res.redirect('/admin/products');
  } catch (error) {
    res.status(500).send('Error deleting product');
  }
});

module.exports = router;
