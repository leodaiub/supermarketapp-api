const express = require('express');
const marketController = require('./controllers/marketController');
const Post = require('./model/Upload');

const multer = require("multer");
const multerConfig = require("./config/upload");

const routes = new express.Router();

routes.post("/posts", multer(multerConfig).single("file"), async (req, res) => {
    const { originalname: name, size, key, location: url = "" } = req.file;
  
    const post = await Post.create({
      name,
      size,
      key,
      url
    });
  
    return res.json(post);
  });

routes.get('/', marketController.index);
routes.get('/market/:id', marketController.findById);
routes.post('/market', marketController.store);
routes.put('/market/:id', marketController.update);
routes.delete('/market/:id', marketController.delete);



module.exports = routes;