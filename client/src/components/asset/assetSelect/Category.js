import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getAssetCategory } from '../../../actions/AssetActions';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { MenuItem } from '@material-ui/core';

const Category = ({ asset: { assetcategory }, getAssetCategory }) => {
  const [values, setValues] = useState('');
  useEffect(() => {
    getAssetCategory('Category');
    //eslint-disable-next-line
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
        Asset Category
      </InputLabel>
      <Select
        value={values.status}
        onChange={handleChange}
        inputProps={{
          name: 'status',
          id: 'status-simple'
        }}
      >
        {assetcategory.map((category, index) =>
          index === 0 ? (
            <MenuItem key={index} value="" disabled>
              <em>{'Please Select'}</em>
            </MenuItem>
          ) : (
            <MenuItem key={index} value={category.id}>
              <em>{category.CatDesc}</em>
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
  { getAssetCategory }
)(Category);
