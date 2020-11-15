import express from 'express';

import ControllerUsers from '../controllers/Controller.users';

const routes = express.Router();

routes.get('/', (req, res, next) => {
	return res.status(200).json({
		title: "API",
		version: "1.0.0"
	});
});

routes.get('/users', ControllerUsers.index);
routes.get('/users/:id', ControllerUsers.index);
routes.post('/users', ControllerUsers.create);
routes.put('/users/:id', ControllerUsers.update);
routes.delete('/users/:id', ControllerUsers.delete);

export default routes;