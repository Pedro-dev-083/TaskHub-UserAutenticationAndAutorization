// src/app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Configurações do Express (body-parser, etc.)

// Rotas
const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
