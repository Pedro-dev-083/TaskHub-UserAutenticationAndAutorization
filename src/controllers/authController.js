// src/controllers/authController.js
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Funções de controle para registro e login
// ...

module.exports = {
  register,
  login,
};
