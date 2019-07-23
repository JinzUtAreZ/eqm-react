import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { connect } from 'react-redux';
import { getAssetList } from '../../actions/AssetActions';
import Preloader from '../layout/Spinner';
import AssetSearch from '../asset/AssetSearch';
import AssetButtons from '../asset/AssetButtons';

const AssetList = ({
  asset: { assetlist, assetcol, loading, filtered },
  getAssetList
}) => {
  let [tbldata] = useState([]);
  const [selected, setSelect] = useState(-1);

  useEffect(() => {
    getAssetList();
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
      <AssetButtons />
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
