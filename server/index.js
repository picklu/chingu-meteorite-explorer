const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./routes');
const helper = require('./helpers');

const app = express();
const port = process.env.PORT || 5000;

// Connect to the database
const authData = {
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
  useNewUrlParser: true
};

mongoose.connect(process.env.DB_HOST, authData, err => {
  if (!err) {
    console.log('Successfully connected to the MongoDB');
  } else {
    console.log(JSON.stringify(err, undefined, 2));
  }
});

// Set default helmet
app.use(helmet());

//  Pase incoming request bodies in a middleware
app.use(bodyParser.json());

// Render favicon.ico
app.use(helper.renderFavicon);

// Set the static path
app.use('/', express.static(path.join(__dirname, '../dist')));

// Set the routes
app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../dist/static/index.html'));
});

// Set the api routes
app.use('/api', routes);

// 404 Error
app.use((req, res, next) => {
  console.log('File or directory:', req.url, 'not found!');
  res.status(404).sendFile(path.join(__dirname, '../dist/static/404.html'));
});

// 500 Error
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).sendFile(path.join(__dirname, '../dist/static/500.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
