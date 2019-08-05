import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { getServiceDept } from '../../../actions/AssetActions';
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

const Division = ({ asset: { assetservedept }, getServiceDept }) => {
  const classes = useStyles();
  const [values, setValues] = useState({ service: '' });

  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
    getServiceDept('Service');

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
      <InputLabel ref={inputLabel} htmlFor="outline-servedept-simple">
        Service Department
      </InputLabel>
      <Select
        value={values.service}
        onChange={handleChange}
        input={
          <OutlinedInput
            labelWidth={labelWidth}
            name="servedept"
            id="outlined-servedept-simple"
          />
        }
      >
        {assetservedept.map((service, index) => (
          <MenuItem key={index} value={service.DepCode}>
            <em>{service.DepName}</em>
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
  { getServiceDept }
)(Division);
