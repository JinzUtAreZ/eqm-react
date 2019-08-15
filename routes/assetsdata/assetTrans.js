const express = require('express');
const router = express.Router();
const sql = require('mssql');
const dbconfig = require('../../connection/connectdb');

//// pending pa ung save neto /////

router.post('/', (req, res) => {
  console.log('Save in Asset');
  const { assetcode, assetname, assetdesc, catselect, statselect } = req.body;
  console.log(assetcode, assetname, assetdesc, catselect, statselect);
  try {
    var conn = new sql.ConnectionPool(dbconfig.config);
    conn.connect().then(function(pool) {
      var request = new sql.Request(pool);
      request.input('inAssetCode', sql.VarChar(30), assetcode);
      request.input('inAssetName', sql.VarChar(200), assetname);
      request.input('inAssetDesc', sql.VarChar(1000), assetdesc);
      request.input('inCat', sql.Int, catselect);
      request.input('inStat', sql.Int, statselect);
      request
        .execute('spSave_AssetData_React')
        .then(function(recordset) {
          res.json({ message: 'Saving successful' });
          conn.close();
        })
        .catch(function(err) {
          console.error(err.message);
          res.status(500).send('Server Error in Saving Asset Data');
        });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error in Saving Asset data information');
  }
});

module.exports = router;
