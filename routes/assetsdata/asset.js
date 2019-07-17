const express = require('express');
const router = express.Router();
const sql = require('mssql');
const dbconfig = require('../../connection/connectdb');

router.get('/', (req, res) => {
  try {
    var conn = new sql.ConnectionPool(dbconfig.config);
    conn.connect().then(function(pool) {
      var request = new sql.Request(pool);
      //request.input(inEmpID, sql.VarChar(30), req.query.userid);
      request
        .execute('spLoad_AssetAll_React')
        .then(function(recordset) {
          //console.log(recordset);
          res.json(recordset.recordset);
          conn.close();
        })
        .catch(function(err) {
          console.error(err.message);
          res.status('500').send('Server Error');
        });
    });
  } catch (err) {}
});

module.exports = router;
