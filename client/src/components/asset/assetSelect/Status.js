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
  getAssetStatus,
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

const Status = ({
  asset: { assetstatus, assetsave },
  getAssetStatus,
  setAssetSaveParam
}) => {
  const classes = useStyles();
  const [values, setValues] = useState({ status: '' });

  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
    getAssetStatus('Status');
    //eslint-disable-next-line
  }, []);

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
    setAssetSaveParam({ statselect: event.target.value });
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel ref={inputLabel} htmlFor="outlined-status-simple">
        Asset Status
      </InputLabel>
      <Select
        value={values.status}
        onChange={handleChange}
        input={
          <OutlinedInput
            labelWidth={labelWidth}
            name="status"
            id="outlined-status-simple"
          />
        }
      >
        {assetstatus.map((stat, index) => (
          <MenuItem key={index} value={stat.StatusID}>
            <em>{stat.StatusDesc.toUpperCase()}</em>{' '}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>Please select a status</FormHelperText>
    </FormControl>
  );
};

const mapStateToProps = state => ({
  asset: state.asset
});

export default connect(
  mapStateToProps,
  { getAssetStatus, setAssetSaveParam }
)(Status);
