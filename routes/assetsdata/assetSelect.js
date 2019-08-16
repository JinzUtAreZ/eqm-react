const express = require('express');
const router = express.Router();
const sql = require('mssql');
const dbconfig = require('../../connection/connectdb');
let fs = require('fs');
const { check, validationResult } = require('express-validator');

item = {}; // for offline json-server

router.get('/:seltype', (req, res) => {
  let seltype = req.params.seltype;
  let proctype = '';

  switch (seltype) {
    case 'Status':
      proctype = 'spLoad_AssetStatus_React';
      break;
    case 'Category':
      proctype = 'spLoad_AssetCat_React';
      break;
    case 'SubCategory':
      proctype = 'spLoad_AssetSubCat_React';
      break;
    case 'Division':
      proctype = 'spLoad_AssetDivision_React';
      break;
    case 'Service':
      proctype = 'spLoad_AssetService_React';
      break;
    case 'Maintenance':
      proctype = 'spLoad_AssetMaintenance_React';
      break;
    default:
      proctype = '';
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
          res.status('500').send('Server Error in Loading Dropdown data');
        });
    });
  } catch (err) {
    console.error(err.message);
    res.status('500').send('Error in initializing Sql Loading Dropdown');
  }
});

///// nested select /////
// dapat ganitong data ang gagamitin kapag nested select
// para pwede mag offline
// const data = {
//   countries: [
//     {
//       value: 'INDIA',
//       label: 'India',
//       states: [
//         { value: 'TAMIL NADU', label: 'Tamil Nadu' },
//         { value: 'KERALA', label: 'Kerala' },
//         { value: 'ANDHRA PRADESH', label: 'Andhra Pradesh' }
//       ]
//     },
//     {
//       value: 'US',
//       label: 'USA',
//       states: [
//         { value: 'CA', label: 'California' },
//         { value: 'NY', label: 'New York' }
//       ]
//     }
//   ]
// }
////// nested select //////
router.get('/:seltype/:userselect', (req, res) => {
  let seltype = req.params.seltype;
  let userselect = req.params.userselect;
  let inputdata = '',
    proctype = '';

  switch (seltype) {
    case 'Department':
      inputdata = 'inDivision';
      proctype = 'spLoad_AssetDepartment_React';
      break;
    case 'SubCategory':
      inputdata = 'inCategory';
      proctype = 'spLoad_AssetSubcategory_React';
      break;
    case 'Custodian':
      inputdata = 'inDepartment';
      proctype = 'spLoad_AssetCustodian_React';
      break;
    default:
      inputdata = '';
      proctype = '';
      break;
  }

  console.log(seltype, inputdata, proctype);

  //console.log(seltype, userselect);
  try {
    var conn = new sql.ConnectionPool(dbconfig.config);
    conn.connect().then(function(pool) {
      var request = new sql.Request(pool);
      request.input(inputdata, sql.VarChar(30), userselect);
      request
        .execute(proctype)
        .then(function(recordset) {
          //console.log(inputdata, proctype);
          res.json(recordset.recordset);
          conn.close();
        })
        .catch(function(err) {
          console.error(err.message);
          res
            .status('500')
            .send('Server Error in Loading Dropdown Userclick data');
        });
    });
  } catch (err) {
    console.error(err.message);
    res.status('500').send('Error in initializing Sql Dropdown Userclick');
  }
});

router.post(
  '/',
  [
    check('name', 'AssetName is required')
      .not()
      .isEmpty(),
    check('description', 'AssetDescription is required')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const { code, name, description } = req.body;
    console.log(code, name, description);
    try {
      var conn = new sqlConnectionPool(dbconfig.config);
      conn
        .connect()
        .ConnectionPool(function(pool) {
          var request = new sql.Request(pool);
          request.input('inAssetCode', sql.VarChar(30), code);
          request.input('inAssetName', sql.VarChar(200), name);
          request.input('inAssetDesc', sql.VarChar(1000), description);
          request.execute('spSave_AssetData_React').then(function(recordset) {
            res.json(recordset.recordset);
            conn.close();
          });
        })
        .catch(function(err) {
          console.error(err.message);
          res.status('500').send('Server Error in Saving Asset Data');
        });
    } catch (err) {
      console.error(err.message);
      res.status('500').send('Error in initializing Sql Saving');
    }
  }
);

module.exports = router;
