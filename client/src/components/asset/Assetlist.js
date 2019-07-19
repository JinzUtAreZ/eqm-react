import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { connect } from 'react-redux';
import { getAssetList } from '../../actions/AssetActions';
import Preloader from '../layout/Spinner';
import AssetSearch from '../asset/AssetSearch';

const AssetList = ({
  asset: { assetlist, loading, filtered },
  getAssetList
}) => {
  var [tbldata, setTbldata] = useState([]);
  const [coldata, setColdata] = useState([]);
  const [chkloop, setChkLoop] = useState(1);
  const [selected, setSelect] = useState(-1);

  useEffect(() => {
    getAssetList();
    // eslint-disable-next-line
  }, []);

  const populate = () => {
    if (filtered !== null) {
      tbldata = filtered;
    } else {
      tbldata = assetlist;
    }
    setTbldata(tbldata);
    setColdata(
      Object.keys(tbldata[0]).map(key => {
        return {
          Header: key,
          accessor: key
        };
      })
    );
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

  if (loading || assetlist === null) {
    return <Preloader />;
  } else {
    if (chkloop === 1) {
      populate();
      setChkLoop(2);
    }
  }

  return (
    <div>
      <AssetSearch />
      {assetlist.length === 0 ? (
        <p className="center">No data to show ...</p>
      ) : (
        <ReactTable
          data={tbldata}
          columns={coldata}
          defaultPageSize={10}
          className="-striped -highlight"
          getTrProps={ClickRow}
        />
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
