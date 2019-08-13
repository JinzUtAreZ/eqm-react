const express = require('express');
const router = express.Router();
const sql = require('mssql');
const dbconfig = require('../../connection/connectdb');

//// pending pa ung save neto /////

router.post('/', (req, res) => {
  try {
    var conn = new sql.ConnectionPool(dbconfig.config);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error in Saving Asset data information');
  }
});

module.exports = router;
