import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { connect } from 'react-redux';
import { deleteJOMeterRow, getJOMeterList } from '../../actions/JOActions';

const JOMeter = ({
  jo: { meterlist, metercol },
  deleteJOMeterRow,
  getJOMeterList
}) => {
  const [selected, setSelect] = useState(-1);

  const fakeData = [
    { name: 'name1', age: 50, address: 'address1' },
    { name: 'name2', age: 20, address: 'address2' },
    { name: 'name3', age: 70, address: 'address3' }
  ];

  let tbldata = useState([]);
  const [newtbldata, setTblData] = useState(fakeData);

  useEffect(() => {
    getJOMeterList();
    // eslint-disable-next-line
  }, []);

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

  const handleEdit = event => {
    console.log('EDIT');
  };

  const handleDelete = row => {
    console.log('DELETE', row.original);
    //tbldata.splice(row.index, 1);
    //setTblData(tbldata);
    const arrayCopy = newtbldata.filter(row => row.index !== row);
    //this.setState({data: arrayCopy});
    setTblData(arrayCopy);
  };

  const state = {
    columns: [
      {
        Header: 'Name',
        accessor: 'name',
        show: true
      },
      {
        Header: 'Age',
        accessor: 'age',
        show: true
      },
      {
        Header: 'Address',
        accessor: 'address',
        show: true
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
  };

  if (meterlist !== null) {
    if (meterlist.length === 0) {
      tbldata = <p className="center">No data to show ...</p>;
    } else {
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
      {meterlist === null ? (
        <p className="center">No data to show ...</p>
      ) : (
        tbldata
      )}
    </div>
  );
};

//JOMeter.propTypes = {};

const mapStateToProps = state => ({
  jo: state.jo
});

export default connect(
  mapStateToProps,
  { deleteJOMeterRow, getJOMeterList }
)(JOMeter);
