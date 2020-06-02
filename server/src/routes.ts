import express from 'express';

const routes = express.Router();

routes.get('/user', (request, response) => {
    return response.json({ message: 'ola'});
});

export default routes;