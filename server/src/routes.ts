import express from 'express';
import knex from './database/connection';
import {celebrate, Joi} from 'celebrate';

import multer from 'multer';
import multerConfig from './config/multer';

import PointsController from './controllers/PointsControllers';
import ItemsController from './controllers/ItemsControllers';

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

//lista os items
routes.get('/items', itemsController.index);



//cria um ponto de coleta
routes.post('/points',
    upload.single('image'),
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.number().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            items: Joi.string().required(),
        })
    }, {
        abortEarly: false
    }),
    pointsController.create
);

//lista um ponto de coleta por filtro
routes.get('/points',pointsController.index);

//lista um ponto de coleta por id
routes.get('/points/:id',pointsController.show);


export default routes; 