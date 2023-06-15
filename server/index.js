const express = require('express');
const path = require('path');
const db = require('../database/index');
const $ = require('jquery');
let app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
// const chalk = require('chalk');
const colors = require('colors');
colors.enable();
const PORT = process.env.PORT || 1128;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist/')));

// TODO - your code here!
// Set up static file service for files in the `client/dist` directory.
// Webpack is configured to generate files in that directory and
// this server must serve those files when requested.

let streams = {};
let sockets = [];

io.on('connection', (socket) => {
  socket.emit('hello', {message: 'a new client connected'});
  console.log('Connection', socket.id);
  sockets.push(socket);
  socket.on('joining', function(data) {
    socket.join(data);
  })
  socket.on('test', function() {
    console.log('test');
  });
  socket.on('streaming', (data) => {
    // console.log(socket.id);
    streams[socket.id] = data;
  });
  socket.on('disconnect', function () {
    console.log('user disconnected');
    delete streams[socket.id];
  });
})

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.post('/', function (req, res) {
  console.log(req.body);
  res.send();
});

app.get('/rooms', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});
app.get('/stream', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.get('/allRooms', (req, res) => {
  let keys = Object.keys(streams);
  res.send(keys);
})

app.get('/rooms/:name', (req, res) => {
  console.log(req.params.name);
  // if (streams[req.params.name] === undefined) {
  //   res.sendStatus(404);
  //   return;
  // }
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
})

server.listen(PORT, function() {
  console.log(`listening on port ${PORT}`.brightBlue);
});

setInterval(() => {
  // console.log('abc');
  let keys = Object.keys(streams);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i]
    io.to(key).emit('streamData', streams[key]);
  }
}, 1000/30);