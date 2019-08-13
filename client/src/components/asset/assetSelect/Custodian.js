import React, { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  OutlinedInput,
  MenuItem
} from '@material-ui/core';
import { connect } from 'react-redux';
import { getCustodian } from '../../../actions/AssetActions';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: '120',
    display: 'flex'
  }
}));

const Custodian = ({ asset: { assetcustodian }, getCustodian }) => {
  const classes = useStyles();
  const [values, setValues] = useState({ cust: '' });

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
      <InputLabel ref={inputLabel} htmlFor="outlined-cust-simple">
        Custodian
      </InputLabel>
      <Select
        value={values.cust}
        onChange={handleChange}
        input={
          <OutlinedInput
            labelWidth={labelWidth}
            name="cust"
            id="outlined-cust-simple"
          />
        }
      >
        {assetcustodian.map((cust, index) => (
          <MenuItem key={index} value={cust.UserID}>
            {cust.Name}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>Please select a Custodian</FormHelperText>
    </FormControl>
  );
};

const mapStateToProps = state => ({
  asset: state.asset
});

export default connect(
  mapStateToProps,
  { getCustodian }
)(Custodian);
