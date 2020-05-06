const express = require('express'); //importa as funcionalidades do express
const routes = require('./routes')

const app = express();

app.use(express.json());
app.use(routes);


//app.post('/users', (request, response) => {
//    const params = request.body;

//    console.log(params);

//    return response.json({
//        chave: 'valor',
//        nome: 'Ciata',
//        idade: '23',
//        classe: 'S5'
//    });
//});

app.listen(3333)

