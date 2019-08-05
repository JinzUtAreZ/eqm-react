import React, { useEffect, useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { connect } from 'react-redux';
import { getAssetStatus } from '../../../actions/AssetActions';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    display: 'flex'
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const SubCategory = ({ asset: { assetsubcat } }) => {
  const classes = useStyles();
  const [values, setValues] = useState({ subcat: '' });

  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel ref={inputLabel} htmlFor="outlined-subcat-simple">
        SubCategory
      </InputLabel>
      <Select
        value={values.subcat}
        onChange={handleChange}
        input={
          <OutlinedInput
            labelWidth={labelWidth}
            name="subcat"
            id="outlined-subcat-simple"
          />
        }
      >
        {assetsubcat.map((subcat, index) => (
          <MenuItem key={index} value={subcat.SubCatID}>
            <em>{subcat.SubCatDesc}</em>{' '}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>Please select a subcategory</FormHelperText>
    </FormControl>
  );
};

const mapStateToProps = state => ({
  asset: state.asset
});

export default connect(
  mapStateToProps,
  { getAssetStatus }
)(SubCategory);
