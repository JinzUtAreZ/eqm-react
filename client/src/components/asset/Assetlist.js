import React, { Component } from 'react';
//import axios from 'axios';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

//const Assetlist = () => {
class Assetlist extends Component {
  state = {
    selected: -1,
    tbldata: [],
    coldata: [],
    search: ''
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const res = await fetch('/api/assets');
    const data = await res.json();
    console.log(data);
    this.setState({ tbldata: data });

    //setColdata(
    this.setState({
      coldata: Object.keys(data[0]).map(key => {
        return {
          Header: key,
          accessor: key
        };
      })
    });
    //);
  };

  render() {
    var { tbldata, coldata, selected } = this.state;
    tbldata = this.state.tbldata;
    if (this.state.search) {
      tbldata = tbldata.filter(row => {
        return (
          row.AssetCode.includes(this.state.search) ||
          row.AssetTag.includes(this.state.search) ||
          row.AssetName.includes(this.state.search) ||
          row.Manufacturer.includes(this.state.search) ||
          row.ModelNo.includes(this.state.search) ||
          row.SerialNo.includes(this.state.search)
        );
      });
    }
    return (
      <div>
        <h1>Asset List</h1>
        Search:{' '}
        <input
          value={this.state.search}
          onChange={e => this.setState({ search: e.target.value })}
        />
        <ReactTable
          data={tbldata}
          columns={coldata}
          defaultPageSize={10}
          className="-striped -highlight"
          getTrProps={(state, rowInfo) => {
            if (rowInfo && rowInfo.row) {
              return {
                onClick: e => {
                  this.setState({
                    selected: rowInfo.index
                  });
                },
                style: {
                  background: rowInfo.index === selected ? '#00afec' : 'white',
                  color: rowInfo.index === selected ? 'white' : 'black'
                }
              };
            } else {
              return {};
            }
          }}
        />
        <br />
      </div>
    );
  }
}

export default Assetlist;
