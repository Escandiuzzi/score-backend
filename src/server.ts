import express from 'express';
import cors from 'cors';
import { route } from './routes';

const app = express();
app.use(cors());
app.use(express.json());
app.use(route);

const server = app.listen(3333, () => 'server running on port 3333');