const express = require('express'); //importa as funcionalidades do express

const app = express();

//
app.post('/users', (request, response) => {
    return response.json({
        chave: 'valor',
        nome: 'Ciata',
        idade: '23',
        classe: 'S5'
    });
});

app.listen(3333)

