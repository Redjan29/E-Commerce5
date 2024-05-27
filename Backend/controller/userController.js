// backend/controllers/userController.js
const User = require('../models/user');

exports.registerUser = async (req, res) => {
  const { Nom, Prenom, Email, Mot_de_passe } = req.body;

  try {
    const newUser = await User.create({ Nom, Prenom, Email, Mot_de_passe });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
