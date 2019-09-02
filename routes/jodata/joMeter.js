const express = require('express');
const router = express.Router();
const sql = require('mssql');
const dbconfig = require('../../connection/connectdb');

router.get('/', function(req, res) {
  let joid = req.params.Joid;
  try {
    var conn = new sql.ConnectionPool(dbconfig.config);
    conn.connect().then(function(pool) {
      var request = new sql.Request(pool);
      //request.input('inJOid', sql.VarChar(30), joid);
      request
        .execute('spLoad_JOMeter_React')
        .then(function(recordset) {
          res.json(recordset.recordset);
          conn.close();
        })
        .catch(function(error) {
          console.error(err.message);
          res.status(500).send('Error in Loading JO meter');
        });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error in Loading JO Meter list');
  }
});

module.exports = router;
