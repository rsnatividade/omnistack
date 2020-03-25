const express = require('express');
const ong_controller = require('./controllers/ong_controller');
const incidents_controller = require('./controllers/incidentes_controller');
const profile_controller = require('./controllers/profile_controller');
const session_controller = require('./controllers/session_controller');

const routes = express.Router();

routes.post('/sessions', session_controller.create);

routes.get('/ongs', ong_controller.index);
routes.post('/ongs', ong_controller.create);

routes.get('/profile', profile_controller.index);

routes.get('/incidents', incidents_controller.index);
routes.post('/incidents', incidents_controller.create);
routes.delete('/incidents/:id', incidents_controller.delete);

module.exports = routes;