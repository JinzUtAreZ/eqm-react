import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import StatSelect from './assetSelect/Status';
import CatSelect from './assetSelect/Category';
import SubCatSelect from './assetSelect/SubCategory';
import DivisionSelect from './assetSelect/Division';
import DeptSelect from './assetSelect/Department';
import ServiceSelect from './assetSelect/Service';
import MaintSelect from './assetSelect/Maintenance';
import CustSelect from './assetSelect/Custodian';
import AssetDataButtons from './AssetDataButtons';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from '@material-ui/pickers';

import { connect } from 'react-redux';
import { setAssetSaveParam } from '../../actions/AssetActions';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(2),
    background: 'linear-gradient(45deg, #e3f2fd 30%, #90caf9 90%)',
    boxShadow: '0 3px 5px 2px rgba(0,0,0,0.32)'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dateField: {
    marginLeft: theme.spacing(2)
  }
}));

const AssetDataInfo = ({ asset, setAssetSaveParam }) => {
  const [values, setValues] = useState({
    age: '',
    multiline: 'Controlled',
    currency: 'EUR'
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
    setAssetSaveParam({ [name]: event.target.value });
  };

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        {' '}
        <h3>ASSET DESCRIPTION</h3>
        <Grid container spacing={3}>
          <Grid item xs={4} sm={3} md>
            <TextField
              id="outlined-name"
              label="Asset Code"
              className={classes.textField}
              onChange={handleChange('assetcode')}
              margin="normal"
              variant="outlined"
              fullWidth
            />
            <CatSelect />
          </Grid>
          <Grid item xs={4} sm={3} md>
            <TextField
              id="outlined-name"
              label="Asset Name"
              className={classes.textField}
              onChange={handleChange('assetname')}
              margin="normal"
              variant="outlined"
              fullWidth
            />
            <SubCatSelect />
          </Grid>
          <Grid item xs={4} sm={3} md>
            <TextField
              id="outlined-name"
              label="Asset Description"
              className={classes.textField}
              multiline
              rows="6"
              onChange={handleChange('assetdesc')}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={4} sm={3} md>
            <StatSelect />
          </Grid>

          <Grid item xs={4} sm={3} md>
            <MaintSelect />
          </Grid>

          <Grid item xs={4} sm={3} md>
            <ServiceSelect />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={4} sm={3} md>
            <DivisionSelect />
          </Grid>

          <Grid item xs={4} sm={3} md>
            <DeptSelect />
          </Grid>

          <Grid item xs={4} sm={3} md>
            <CustSelect />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={4} sm={3} md>
            {/* <InputLabel shrink htmlFor="age-label-placeholder">
              Warranty Date
            </InputLabel> */}
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                className={classes.dateField}
                margin="normal"
                id="mui-pickers-date"
                label="Warranty Date"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date'
                }}
              />
              {/* <KeyboardTimePicker
                margin="normal"
                id="mui-pickers-time"
                label="Time picker"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change time'
                }}
              /> */}
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={4} sm={3} md>
            <TextField
              id="outline-tag"
              label="Asset Tag Name"
              className={classes.textField}
              onChange={handleChange('name')}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={4} sm={3} md>
            <TextField
              id="outline-notes"
              label="Asset Notes"
              className={classes.textField}
              onChange={handleChange('name')}
              multiline
              rows="4"
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
      </Paper>
      <AssetDataButtons />
    </div>
  );
};

AssetDataInfo.propTypes = {
  asset: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  asset: state.asset
});

export default connect(
  mapStateToProps,
  { setAssetSaveParam }
)(AssetDataInfo);
