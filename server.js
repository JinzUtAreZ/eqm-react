const express = require('express');
const app = express();
const connect = require('./connection/connectdb');

// Init Middleware importante sa req.body {Saving, Update}
app.use(express.json({ extended: false }));

//// routers for db ////
app.use('/api/users', require('./routes/users'));

//// routers for asset ////
app.use('/api/assets', require('./routes/assetsdata/asset'));
app.use('/api/assetSelect', require('./routes/assetsdata/assetSelect'));
app.use('/api/assetTrans', require('./routes/assetsdata/assetTrans'));

//// routers for joborder ////
//app.use('/api/joMeter', require('./routes/jodata/meter'));

//// established connection //
app.listen(connect.port(), function() {
  var datetime = new Date();
  var message =
    'Server running at ' + connect.port() + ' starting: ' + datetime;
  console.log(message);
});
