const express = require('express');

const routes = express.Router();

routes.post('/users', (request, response) => {
    const params = request.body;

    console.log(params);

    return response.json({
        chave: 'valor',
        nome: 'Ciata',
        idade: '23',
        classe: 'S5'
    });
});

module.exports = routes;