import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { connect } from 'react-redux';
import { getAssetList } from '../../actions/AssetActions';
import Preloader from '../layout/Spinner';

const AssetList = ({ asset: { assetlist, loading }, getAssetList }) => {
  const [tbldata, setTbldata] = useState([]);
  const [coldata, setColdata] = useState([]);
  const [chkloop, setChkLoop] = useState(1);

  useEffect(() => {
    getAssetList();
    // eslint-disable-next-line
  }, []);

  const populate = () => {
    setTbldata(assetlist);
    setColdata(
      Object.keys(assetlist[0]).map(key => {
        return {
          Header: key,
          accessor: key
        };
      })
    );
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
      {assetlist.length === 0 ? (
        <p className="center">No data to show ...</p>
      ) : (
        <ReactTable
          data={tbldata}
          columns={coldata}
          defaultPageSize={10}
          className="-striped -highlight"
          //getTrProps={ClickRow}
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
