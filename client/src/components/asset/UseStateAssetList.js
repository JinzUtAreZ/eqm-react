import React, { useState, useEffect, useRef } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const Assetlist = () => {
  //// ung classassetlist.js ay ang export class conversion ng page na to
  const [tbldata, setTbldata] = useState([]);
  const [coldata, setColdata] = useState([]);
  const [selected, setSelect] = useState(-1);
  //var [searchdata, setSearch] = useState([]);
  const text = useRef('');

  useEffect(() => {
    LoadAssetlist();
  }, []);

  const LoadAssetlist = async () => {
    //const data = await axios.get('/api/assets');
    // console.log(results);
    const res = await fetch('/api/assets');
    const data = await res.json();
    console.log(data);
    setTbldata(data);

    setColdata(
      Object.keys(data[0]).map(key => {
        return {
          Header: key,
          accessor: key
        };
      })
    );
  };

  const SearchTable = e => {
    let search = text.current.value;
    let searchdata = tbldata;
    if (search) {
      searchdata = searchdata.filter(row => {
        return (
          row.AssetCode.includes(search) ||
          row.AssetTag.includes(search) ||
          row.AssetName.includes(search) ||
          row.Manufacturer.includes(search) ||
          row.ModelNo.includes(search) ||
          row.SerialNo.includes(search)
        );
      });
      //console.log(tbldata.length);
      //setSearch(tbldata);
      setTbldata(searchdata);
    }
  };

  const ClickRow = (state, rowInfo, instance) => {
    if (rowInfo && rowInfo.row) {
      // if (rowInfo.index === parseInt(tbldata.length - 1)) {
      //   setLoading(false);
      // }
      return {
        onClick: e => {
          setSelect(rowInfo.index);
          const rowData = rowInfo.original;
          console.log(rowData);
        },
        style: {
          background: rowInfo.index === selected ? '#00afec' : 'white',
          color: rowInfo.index === selected ? 'white' : 'black'
        }
      };
    } else {
      return {};
    }
  };

  return (
    <div>
      Search:{' '}
      <input
        id="search"
        type="search"
        placeholder="Search Logs.."
        ref={text}
        onChange={SearchTable}
      />
      <br />
      <ReactTable
        data={tbldata}
        columns={coldata}
        defaultPageSize={10}
        className="-striped -highlight"
        getTrProps={ClickRow}
      />
      <br />
    </div>
  );
};

export default Assetlist;
