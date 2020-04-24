const express = require('express'); //importa as funcionalidades do express

const app = express();

app.get('/', (request, response) => {
    return response.send('Hello World')
})

app.listen(3333)

