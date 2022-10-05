import cors from 'cors';
import { Router, Request, Response } from 'express';
import { StatsReviewer } from './stats-review';

export const route = Router();

const stats_reviewer = new StatsReviewer();


route.get('/', cors(), (req: Request, res: Response) => {
    res.send('Hello World!')
});

route.post("/stats", cors(), (req: Request, res: Response) => {    
    const result = stats_reviewer.review(req.body)

    res.json(result)
});