// backend/controllers/userController.js
const Utilisateur = require('../models/user');

exports.registerUser = async (req, res) => {
  const { Nom, Prenom, Email, Mot_de_passe } = req.body;

  console.log('Received data:', req.body);

  try {
    const newUser = await Utilisateur.create({ Nom, Prenom, Email, Mot_de_passe });
    console.log('User created:', newUser);
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error while creating user:', error);
    res.status(400).json({ message: error.message });
  }
};
