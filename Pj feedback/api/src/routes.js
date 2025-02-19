const express = require('express');

const routes = express.Router();

const feedbacks = require('./controllers/feedbacks.js');

routes.get('/', (req, res)=>{
    res.send('API Feedback Respondendo!')
});

routes.post('/feedbacks', feedbacks.create)
routes.get('/feedbacks', feedbacks.read)

module.exports = routes;