import config from 'config';
import express, { NextFunction, Request, Response } from "express";
import getSymbolValueModel from './models/symbol-value/factory'

const server = express();

server.get('/api/symbols/:symbol/latest', async function (req: Request, res: Response, next: NextFunction) {
    const values = await getSymbolValueModel().getLatest(req.params.symbol);
    res.json(values);
})

server.listen(config.get('api.port'), () => {
    console.log('started...')
});
