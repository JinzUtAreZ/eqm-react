import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';

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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    fullWidth: true,
    display: 'flex'
  }
}));

const AssetDataProd = () => {
  const [values, setValues] = useState({});

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        {' '}
        <h3>PRODUCT INFORMATION</h3>
        <Grid container spacing={3}>
          <Grid item xs={3} sm={3} md>
            <FormControl className={classes.formControl}>
              <InputLabel shrink htmlFor="age-label-placeholder">
                Supplier Name
              </InputLabel>
              <Select
                onChange={handleChange}
                input={<Input name="age" id="age-label-placeholder" />}
                displayEmpty
                name="age"
                className={classes.selectEmpty}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3} sm={3} md>
            <TextField
              className={classes.TextField}
              label="Manufacturer"
              //onChange={}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={3} sm={3} md>
            <TextField
              className={classes.TextField}
              label="Model Number"
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={3} sm={3} md>
            <TextField
              className={classes.TextField}
              label="Serial Number"
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={4} sm={3} md>
            <TextField
              className={classes.TextField}
              label="Estimated Life in Years"
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={4} sm={3} md>
            <TextField
              className={classes.TextField}
              label="Purchase Value"
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={4} sm={3} md>
            <TextField
              className={classes.TextField}
              label="Current Value"
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={4} sm={3} md>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                id="mui-pickers-date"
                label="Date of Purchase"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date'
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>

          <Grid item xs={4} sm={3} md>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                id="mui-pickers-date"
                label="Date of Deployment"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date'
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>

          <Grid item xs={4} sm={3} md>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                id="mui-pickers-date"
                label="Date Disposed"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date'
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default AssetDataProd;
