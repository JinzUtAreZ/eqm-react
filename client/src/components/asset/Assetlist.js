import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { connect } from 'react-redux';
import { getAssetList } from '../../actions/AssetActions';
import Preloader from '../layout/Spinner';
import AssetSearch from '../asset/AssetSearch';

const AssetList = ({
  asset: { assetlist, assetcol, loading, filtered },
  getAssetList
}) => {
  var [tbldata, setTbldata] = useState([]);
  const [coldata, setColdata] = useState([]);
  const [chkloop, setChkLoop] = useState(false);
  const [selected, setSelect] = useState(-1);

  useEffect(() => {
    getAssetList();
    // eslint-disable-next-line
  }, []);

  // const populate = () => {
  //   if (filtered !== null && filtered.length !== 0) {
  //     tbldata = filtered;
  //   } else {
  //     tbldata = assetlist;
  //   }
  //   setTbldata(tbldata);
  //   setColdata(assetcol);
  // };

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

  if (loading || assetlist === null) {
    return <Preloader />;
  }

  if (filtered !== null) {
    if (filtered.length === 0) {
      tbldata = <p className="center">No data to show ...</p>;
    } else {
      tbldata = (
        <ReactTable
          data={filtered}
          columns={assetcol}
          defaultPageSize={10}
          className="-striped -highlight"
          getTrProps={ClickRow}
        />
      );
    }
  } else {
    tbldata = (
      <ReactTable
        data={assetlist}
        columns={assetcol}
        defaultPageSize={10}
        className="-striped -highlight"
        getTrProps={ClickRow}
      />
    );
  }

  return (
    <div>
      <AssetSearch />
      {assetlist === null ? (
        <p className="center">No data to show ...</p>
      ) : (
        tbldata
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  asset: state.asset
});

export default connect(
  mapStateToProps,
  { getAssetList }
)(AssetList);
