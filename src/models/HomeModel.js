const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    titulo: { type: String, required: true },// objeto com a configuração dos dados
    descricao: String
});

// MongoDB não está nem ai para como os dados vão ser salvos lá, por isso cabe a nós modelas e verificar esses dados.
// NoCycle.

const HomeModel = mongoose.model('Home', HomeSchema);

module.exports = HomeModel;