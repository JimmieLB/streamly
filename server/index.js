const express = require('express');
const path = require('path');
const db = require('../database/index');
const $ = require('jquery');
let app = express();

const PORT = process.env.PORT || 1128;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist/')));

// TODO - your code here!
// Set up static file service for files in the `client/dist` directory.
// Webpack is configured to generate files in that directory and
// this server must serve those files when requested.
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});


app.post('/', function (req, res) {
  console.log(req.body);
  res.send();
});

app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});

