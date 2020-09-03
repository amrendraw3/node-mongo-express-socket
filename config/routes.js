'use strict';

var express = require('express');
var apiRoutes = express.Router();
const playeController = require('../controllers/players');

module.exports = function(app) {
    apiRoutes.get('/players', playeController.index); // get all players
    apiRoutes.post('/players/new', playeController.create); // create a player
    app.use('/api', apiRoutes);
}