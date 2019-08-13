import React, { useEffect, useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { connect } from 'react-redux';
import {
  getAssetCategory,
  getAssetSubCategory,
  setAssetSaveParam
} from '../../../actions/AssetActions';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    fullWidth: true,
    display: 'flex'
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const Category = ({
  asset: { assetcategory, assetsave },
  getAssetCategory,
  getAssetSubCategory,
  setAssetSaveParam
}) => {
  const classes = useStyles();
  const [values, setValues] = useState({ category: '' });

  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);
  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
    getAssetCategory('Category');
    //eslint-disable-next-line
  }, []);

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
    //console.log(event.target.value);
    getAssetSubCategory('SubCategory', event.target.value);
    setAssetSaveParam({ catselect: event.target.value });
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel ref={inputLabel} htmlFor="outlined-category-simple">
        Asset Category
      </InputLabel>
      <Select
        value={values.category}
        onChange={handleChange}
        input={
          <OutlinedInput
            labelWidth={labelWidth}
            name="category"
            id="outlined-category-simple"
          />
        }
      >
        {assetcategory.map((category, index) => (
          <MenuItem key={index} value={category.id}>
            <em>{category.CatDesc}</em>
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>Please select a category</FormHelperText>
    </FormControl>
  );
};

const mapStateToProps = state => ({
  asset: state.asset
});

export default connect(
  mapStateToProps,
  { getAssetCategory, getAssetSubCategory, setAssetSaveParam }
)(Category);
