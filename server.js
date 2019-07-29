const express = require('express');
const app = express();
const connect = require('./connection/connectdb');

//// routers for db ////
app.use('/api/users', require('./routes/users'));
app.use('/api/assets', require('./routes/assetsdata/asset'));
app.use('/api/assetSelect', require('./routes/assetsdata/assetSelect'));

//// established connection //
app.listen(connect.port(), function() {
  var datetime = new Date();
  var message =
    'Server running at ' + connect.port() + ' starting: ' + datetime;
  console.log(message);
});
