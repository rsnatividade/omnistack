const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana OmniStack 11',
        aluno: 'Robson Schneider da Natividade'
    });
});

app.listen(3333);