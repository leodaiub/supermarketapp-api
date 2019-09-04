require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const path = require ('path');
const cors = require ('cors');


const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.json());
app.use(cors());
mongoose.connect('mongodb+srv://leodaiub:catwalktest@supermarketapp-ov2ac.mongodb.net/Development?retryWrites=true&w=majority', {
  useNewUrlParser: true,
});

app.use((req,res,next) => {
  req.io = io;
  
  next();
});


app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "tmp", "uploads"))
);

app.use(require('./src/routes'));

server.listen(process.env.PORT || 3030, () => {
  console.log(`Server running at 3030`);
});