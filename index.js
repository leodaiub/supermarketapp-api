const express = require('express');
const mongoose = require('mongoose');
const path = require ('path');
const cors = require ('cors');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb+srv://leodaiub:catwalktest@supermarketapp-ov2ac.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
});

app.use((req,res,next) => {
  req.io = io;
  
  next();
});

app.use(cors());

app.use('/files', express.static(path.resolve()));

app.use(require('./src/routes'));

server.listen(process.env.PORT || 3000, () => {
  console.log(`Server running at 3000`);
});