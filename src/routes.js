const express = require('express');
const marketController = require('./controllers/marketController');
const multer = require("multer");
const multerConfig = require("./config/upload");

const routes = new express.Router();

routes.get('/', marketController.index);
routes.get('/market/:id', marketController.findById);
routes.post('/market',multer(multerConfig).array('superMarketAdditionalImages', 4), marketController.store);
routes.put('/market/:id', marketController.update);
routes.delete('/market/:id', marketController.delete);

module.exports = routes;