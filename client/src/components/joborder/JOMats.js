import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { connect } from 'react-redux';
import { getJOMaterList } from '../../actions/JOActions';

const JOMats = ({ jo: { materlist }, getJOMaterList }) => {
  let tbldata = useState([]);
  //let state = {};

  const [selected, setSelect] = useState(-1);
  const [newtbldata, setTblData] = useState();

  useEffect(() => {
    getJOMaterList();
    // eslint-disable-next-line
  }, []);

  const handleEdit = event => {
    console.log('EDIT');
  };

  const handleDelete = row => {
    console.log('DELETE', row.original);
    //tbldata.splice(row.index, 1);
    //setTblData(tbldata);
    //const arrayCopy = newtbldata.filter(row => row.index !== row);
    //this.setState({data: arrayCopy});
    //setTblData(arrayCopy);
  };

  const ClickRow = (state, rowInfo, instance) => {
    if (rowInfo && rowInfo.row) {
      return {
        onClick: e => {
          setSelect(rowInfo.index);
          const rowData = rowInfo.original;
          console.log(rowData);
        },
        style: {
          background: rowInfo.index === selected ? '#00afec' : '',
          color: rowInfo.index === selected ? 'white' : 'black'
        }
      };
    } else {
      return {};
    }
  };

  if (materlist != null) {
    //setTblData(materlist);
    // tbldata = Object.keys(materlist).map(key => {
    //   return {
    const state = {
      columns: [
        {
          Header: 'Asset',
          accessor: 'AssetID'
        },
        {
          Header: '1',
          accessor: 'Col1'
        },
        {
          Header: '2',
          accessor: 'Col2'
        },
        {
          Header: '3',
          accessor: 'Col3'
        },
        {
          Header: 'Edit/Delete Rows',
          accessor: 'Actions',
          Cell: row => (
            <center>
              <button onClick={() => handleEdit(row.original)}>Edit</button>
              &nbsp;&nbsp;
              <button onClick={() => handleDelete(row)}>Delete</button>
            </center>
          )
        }
      ]
      //};
      //  };
      //});
    };

    if (materlist.length === 0) {
      tbldata = <p className="center">No data to show ...</p>;
    } else {
      if (newtbldata === undefined) {
        setTblData(materlist);
      }
      tbldata = (
        <ReactTable
          data={newtbldata}
          columns={state.columns}
          defaultPageSize={10}
          className="-striped -highlight"
          getTrProps={ClickRow}
        />
      );
    }
  }

  return (
    <div>
      {materlist === null ? (
        <p className="center">No data to show ...</p>
      ) : (
        tbldata
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  jo: state.jo
});

export default connect(
  mapStateToProps,
  { getJOMaterList }
)(JOMats);
