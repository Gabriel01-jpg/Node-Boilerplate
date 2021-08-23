const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')

// next -- chama o próximo callback
route.get('/', homeController.homePage);
route.post('/', homeController.trataPost);
route.get('/contato', contatoController.paginaInicial)

module.exports = route;

