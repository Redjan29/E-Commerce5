const bcrypt = require('bcrypt');
const User = require('../models/user');

exports.registerUser = async (req, res) => {
  const { Nom, Prenom, Email, Mot_de_passe } = req.body;

  try {
    console.log('Registering user with email:', Email);
    const hashedPassword = await bcrypt.hash(Mot_de_passe, 10);
    const newUser = await User.create({ Nom, Prenom, Email, Mot_de_passe: hashedPassword });
    console.log('User registered:', newUser);
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error during registration:', error.message);
    res.status(400).json({ message: error.message });
  }
};
