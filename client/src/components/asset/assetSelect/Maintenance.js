import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  OutlinedInput
} from '@material-ui/core';
import { connect } from 'react-redux';
import { getAssetMaintenance } from '../../../actions/AssetActions';

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

const Maintenance = ({ asset: { assetmainte }, getAssetMaintenance }) => {
  const classes = useStyles();
  const [values, setValues] = useState({ mainte: '' });

  const inputLabel = useRef(null);
  const [labelWidth, setlabelWidth] = useState(0);

  useEffect(() => {
    setlabelWidth(inputLabel.current.offsetWidth);
    getAssetMaintenance('Maintenance');
    //eslint-disable-next-line
  }, []);

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel ref={inputLabel} htmlFor="outlined-mainte-simple">
        Maintenance Type
      </InputLabel>
      <Select
        value={values.mainte}
        onChange={handleChange}
        input={
          <OutlinedInput
            labelWidth={labelWidth}
            name="mainte"
            id="outlined-mainte-simple"
          />
        }
      >
        {assetmainte.map((mainte, index) => (
          <MenuItem key={index} value={mainte.MainteID}>
            {mainte.MainteDesc}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const mapStateToProps = state => ({
  asset: state.asset
});

export default connect(
  mapStateToProps,
  { getAssetMaintenance }
)(Maintenance);
