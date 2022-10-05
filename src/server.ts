import express from 'express';
import { route } from './routes';

const app = express();

app.use(express.json());
app.use(route);

const server = app.listen(3333, () => 'server running on port 3333');