const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

//Criar sessao login
routes.post('/sessions', SessionController.create);
//Listar ONGs
routes.get('/ongs', OngController.index);
//Cadastrar ONG
routes.post('/ongs', OngController.create);
//----------------------------------------------------------//

//Cadastrar Incident
routes.post('/incidents', IncidentController.create);
//Listar Incident
routes.get('/incidents', IncidentController.index);
//Deletar incidente
routes.delete('/incidents/:id', IncidentController.delete);

//Listar caso especifico ONG
routes.get('/profile', ProfileController.index);



module.exports = routes;