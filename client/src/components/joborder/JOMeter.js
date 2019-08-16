import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { connect } from 'react-redux';

const JOMeter = () => {
  const [selected, setSelect] = useState(-1);

  const fakeData = [
    { name: 'name1', age: 50, address: 'address1' },
    { name: 'name2', age: 20, address: 'address2' },
    { name: 'name3', age: 70, address: 'address3' }
  ];

  const toggleColumn = n => {
    const cols = this.state.columns.map((col, i) =>
      n === i ? { ...col, show: !col.show } : col
    );
    this.setState({
      columns: cols
    });
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
      }
    ]
  };
  return (
    <div>
      <ReactTable
        data={fakeData}
        minRows={0}
        columns={state.columns}
        className="-striped -highlight"
        getTrProps={ClickRow}
      />
      <div>
        <button onClick={() => toggleColumn(0)}>Toggle First Column</button>
        <button onClick={() => toggleColumn(1)}>Toggle Second Column</button>
        <button onClick={() => toggleColumn(2)}>Toggle Third Column</button>
      </div>
    </div>
  );
};

JOMeter.propTypes = {};

const mapStateToProps = state => ({
  asset: state.asset
});

export default connect(
  mapStateToProps,
  {}
)(JOMeter);
