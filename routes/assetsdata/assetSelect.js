const express = require('express');
const router = express.Router();
const sql = require('mssql');
const dbconfig = require('../../connection/connectdb');
let fs = require('fs');

item = {}; // for offline json-server

router.get('/:seltype', (req, res) => {
  let seltype = req.params.seltype;
  let proctype = '';
  if (seltype == 'Status') {
    proctype = 'spLoad_AssetStatus_React';
  } else if (seltype == 'Category') {
    proctype = 'spLoad_AssetCat_React';
  } else if (seltype == 'SubCategory') {
    proctype = 'spLoad_AssetCat_React';
  } else if (seltype == 'Division') {
    proctype = 'spLoad_AssetCat_React';
  } else if (seltype == 'Department') {
    proctype = 'spLoad_AssetCat_React';
  }

  try {
    var conn = new sql.ConnectionPool(dbconfig.config);

    conn.connect().then(function(pool) {
      var request = new sql.Request(pool);
      //request.input(inEmpID, sql.VarChar(30), req.query.userid);
      request
        .execute(proctype)
        .then(function(recordset) {
          //console.log(recordset);

          item[seltype] = recordset.recordset;
          var data = JSON.stringify(item, null, 2);
          //var data = JSON.stringify({ seltype: recordset.recordset }, null, 2);
          fs.writeFileSync('./routes/SelectData.json', data, callback);

          function callback() {
            console.log('Finished writing temporary storage');
          }

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
