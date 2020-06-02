import express from 'express';
import knex from './database/connection';

import PointsController from './controllers/PointsControllers';
import ItemsController from './controllers/ItemsControllers';

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

//lista os items
routes.get('/items', itemsController.index);



//cria um ponto de coleta
routes.post('/points',pointsController.create);

//lista um ponto de coleta por filtro
routes.get('/points',pointsController.index);

//lista um ponto de coleta por id
routes.get('/points/:id',pointsController.show);


export default routes; 