const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Hola, Andres!!!');
});

module.exports = routes;