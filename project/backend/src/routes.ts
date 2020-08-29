import { Router, Request, Response, response } from 'express';

import { getFarmersByNameOrDoc } from './controller/FarmerController'

const routes = Router();

routes.get('/farmer/search', getFarmersByNameOrDoc);

routes.all('*', (request: Request, response: Response) => {
    return response.json({ success: false, error: 'ENDPOINT_NOT_FOUND' })
});

export default routes;