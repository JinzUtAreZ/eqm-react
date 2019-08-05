import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { getDivision, getDepartment } from '../../../actions/AssetActions';
import { FormControl, InputLabel, MenuItem } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';

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

const Division = ({ asset: { assetdiv }, getDivision, getDepartment }) => {
  const classes = useStyles();
  const [values, setValues] = useState({ div: '' });

  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
    getDivision('Division');

    //eslint-disable-next-line
  }, []);

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
    getDepartment('Department', event.target.value);
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel ref={inputLabel} htmlFor="outline-div-simple">
        Division
      </InputLabel>
      <Select
        value={values.div}
        onChange={handleChange}
        input={
          <OutlinedInput
            labelWidth={labelWidth}
            name="div"
            id="outlined-div-simple"
          />
        }
      >
        {assetdiv.map((div, index) => (
          <MenuItem key={index} value={div.DivCode}>
            <em>{div.DivName}</em>
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
  { getDivision, getDepartment }
)(Division);
