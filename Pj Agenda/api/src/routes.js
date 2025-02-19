const express = require('express');

const routes = express.Router();

const telefone = require('./controllers/telefone.js');

routes.get('/', (req, res)=>{
    res.send('API Telefone Respondendo!')
});

routes.post('/telefones', telefone.create)
routes.get('/telefones', telefone.read)

module.exports = routes;