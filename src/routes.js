const express = require('express');
const multer = require('multer');
const marketController = require('./controllers/marketController');
const uploadConfig = require('./config/upload');

const routes = new express.Router();
//const upload = multer(uploadConfig);

routes.get('/', marketController.index);
routes.get('/market/:id', marketController.findById);
routes.post('/market', /*upload.single('image'),*/ marketController.store);
routes.put('/market/:id', marketController.update);
routes.delete('/market/:id', marketController.delete);


module.exports = routes;