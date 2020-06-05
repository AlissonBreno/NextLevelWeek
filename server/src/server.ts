import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários.');

    response.json([
        'Alisson',
        'Eduardo',
        'Roni',
        'Jão Ed',
        'Mais um :D'
    ]);
});

app.listen(3333);
 