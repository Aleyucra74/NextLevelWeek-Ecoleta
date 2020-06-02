import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);

//para rodar o server rapidamente sem ter que ler o nodemodules
// npm run ts-node-dev --transpileOnly --ignore-watch node_modules src/server.ts