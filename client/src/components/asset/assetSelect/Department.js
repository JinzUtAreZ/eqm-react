import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { getDivision } from '../../../actions/AssetActions';
import { FormControl, InputLabel, OutlinedInput } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';

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

const Department = ({ asset: { assetdept }, getDivision }) => {
  const classes = useStyles();
  const [values, setValues] = useState({ dept: '' });

  const inputLabel = useRef(null);
  const [labelWidth, setLabelWitdh] = useState(0);

  useEffect(() => {
    setLabelWitdh(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel ref={inputLabel} htmlFor="outlined-dept-simple">
        Department
      </InputLabel>
      <Select
        value={values.dept}
        onChange={handleChange}
        input={
          <OutlinedInput
            labelWidth={labelWidth}
            name="dept"
            id="outlined-dept-simple"
          />
        }
      >
        {assetdept.map((dept, index) => (
          <MenuItem key={index} value={dept.DepCode}>
            <em>{dept.DepName}</em>
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>Please select a department</FormHelperText>
    </FormControl>
  );
};

const mapStateToProps = state => ({
  asset: state.asset
});

export default connect(
  mapStateToProps,
  { getDivision }
)(Department);
