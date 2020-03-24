const express = require('express');

const app = express();

app.get('/', ( request , response ) => {
    return response.json({
        evento: 'Eu sou o cara',
        aluno: 'pirocudo'
    });
});

app.listen(3333);