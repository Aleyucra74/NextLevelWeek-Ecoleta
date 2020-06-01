import express from 'express';

const app = express();

app.get('/user', (request, response) => {
    console.log('oie');


    //array para trazer dados
    response.json([
        'deiego',
        'cleiton',
        'robson',
        'carla'
    ]);
});

app.listen(3333);