import React, { Fragment, useState, useEffect } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';
import { getAssetStatus } from '../../../actions/AssetActions';

const Status = ({ asset: { assetstatus }, getAssetStatus }) => {
  let [values, setValues] = useState({ status: '' });

  useEffect(() => {
    getAssetStatus('Status');

    // eslint-disable-next-line
  }, []);

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <Fragment>
      <InputLabel shrink htmlFor="status-simple">
        Asset Status
      </InputLabel>
      <Select
        value={values.status}
        onChange={handleChange}
        inputProps={{
          name: 'status',
          id: 'status-simple'
        }}
      >
        {assetstatus.map((stat, index) =>
          index === 0 ? (
            <MenuItem key={index} value="" disabled>
              <em>{'Please Select'}</em>{' '}
            </MenuItem>
          ) : (
            <MenuItem key={index} value={stat.StatusID}>
              <em>{stat.StatusDesc}</em>{' '}
            </MenuItem>
          )
        )}
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
