const express = require('express'); //importa as funcionalidades do express

const app = express();

//
app.get('/users', (request, response) => {
    const params = request.query;

    console.log(params)

    return response.json({
        chave: 'valor',
        nome: 'Ciata',
        idade: '23',
        classe: 'S5'
    });
});

app.listen(3333)

