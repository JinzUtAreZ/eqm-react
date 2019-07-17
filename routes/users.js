const express = require('express');
const sql = require('mssql');
const router = express.Router();
const dbconfig = require('../connection/connectdb');

router.post('/', (req, res) => {
  try {
    var conn = new sql.ConnectionPool(dbconfig.config);
    conn
      .connect()
      .then(function(pool) {
        var request = new sql.Request(pool);
        request.input('inUserName', sql.VarChar(50), req.query.username);
        request.input('inPassword', sql.VarChar(50), req.query.password);
        request.input('inEntry', sql.VarChar(20), req.query.entry);
        request.execute('spLoad').then(function(recordset) {
          console.log(recordset.recordset);
          conn.close();
        });
      })
      .catch(function(err) {
        console.error(err);
        conn.close();
      });
  } catch (err) {
    console.error(err.message);
    res.status(500);
  }
});

module.exports = router;
