import express from 'express'
const UserController = require('./controllers/UserController');
const routes = express.Router();

routes.post('/users', UserController);

export default routes;