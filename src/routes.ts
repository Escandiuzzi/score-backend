import cors from 'cors';
import { Router, Request, Response } from 'express';

export const route = Router();

route.get('/', cors(), (req: Request, res: Response) => {
  res.send('Hello World!')
});