const express = require('express');
const multer = require('multer');
const marketController = require('./controllers/marketController');
const editController = require('./controllers/editController');
const deleteController = require('./controllers/deleteController');
const uploadConfig = require('./config/upload');

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get('/', marketController.index);
routes.post('/market', upload.single('image'), marketController.store);
routes.put('/market/id', editController.store);
routes.delete('/market/id', deleteController.delete);


module.exports = routes;