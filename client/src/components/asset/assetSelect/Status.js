import React, { Fragment, useState, useEffect } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';
import { getAssetStatus } from '../../../actions/AssetActions';

const Status = ({ asset: { assetstatus }, getAssetStatus }) => {
  let [selStat, setStat] = useState([]);
  const [novalue] = useState([]);

  useEffect(() => {
    getAssetStatus('Status');

    // eslint-disable-next-line
  }, []);

  if (assetstatus != null) {
    console.log(assetstatus);
    selStat = assetstatus.map((stat, index) =>
      index === 0 ? (
        <MenuItem key={index} value="">
          <em>Please Select</em>
        </MenuItem>
      ) : (
        <MenuItem key={index} value={stat.StatusID}>
          <em>{stat.StatusDesc}</em>
        </MenuItem>
      )
    );
  }

  const handleChange = event => {
    setStat({ [event.target.name]: event.target.value });
  };

  return (
    <Fragment>
      <InputLabel shrink htmlFor="age-label-placeholder">
        Asset Status
      </InputLabel>
      <Select
        value={novalue}
        onChange={handleChange}
        displayEmpty
        name="statusOpt"
        // className={classes.selectEmpty}
      >
        {selStat}
      </Select>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  asset: state.asset
});

export default connect(
  mapStateToProps,
  { getAssetStatus }
)(Status);
