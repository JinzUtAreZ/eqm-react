import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
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
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    fullWidth: true,
    display: 'flex'
  }
}));

const AssetDataInfo = () => {
  const [values, setValues] = useState({
    age: '',
    multiline: 'Controlled',
    currency: 'EUR'
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
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
              onChange={handleChange('name')}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={4} sm={3} md>
            <TextField
              id="outlined-name"
              label="Asset Name"
              className={classes.textField}
              onChange={handleChange('name')}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={4} sm={3} md>
            <TextField
              id="outlined-name"
              label="Asset Description"
              className={classes.textField}
              multiline
              rows="4"
              onChange={handleChange('name')}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={4} sm={3} md>
            <FormControl className={classes.formControl}>
              <InputLabel shrink htmlFor="age-label-placeholder">
                Asset Status
              </InputLabel>
              <Select
                value={values.age}
                onChange={handleChange}
                input={<Input name="age" id="age-label-placeholder" />}
                displayEmpty
                name="age"
                className={classes.selectEmpty}
              >
                <MenuItem value="">
                  <em>Please Select</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={4} sm={3} md>
            <FormControl className={classes.formControl}>
              <InputLabel shrink htmlFor="age-label-placeholder">
                Asset Category
              </InputLabel>
              <Select
                value={values.age}
                onChange={handleChange}
                input={<Input name="age" id="age-label-placeholder" />}
                displayEmpty
                name="age"
                className={classes.selectEmpty}
              >
                <MenuItem value="">
                  <em>Please Select</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={4} sm={3} md>
            <FormControl className={classes.formControl}>
              <InputLabel shrink htmlFor="age-label-placeholder">
                Asset SubCategory
              </InputLabel>
              <Select
                value={values.age}
                onChange={handleChange}
                input={<Input name="age" id="age-label-placeholder" />}
                displayEmpty
                name="age"
                className={classes.selectEmpty}
              >
                <MenuItem value="">
                  <em>Please Select</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={4} sm={3} md>
            <FormControl className={classes.formControl}>
              <InputLabel shrink htmlFor="age-label-placeholder">
                Division
              </InputLabel>
              <Select
                value={values.age}
                onChange={handleChange}
                input={<Input name="age" id="age-label-placeholder" />}
                displayEmpty
                name="age"
                className={classes.selectEmpty}
              >
                <MenuItem value="">
                  <em>Please Select</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={4} sm={3} md>
            <FormControl className={classes.formControl}>
              <InputLabel shrink htmlFor="age-label-placeholder">
                Department
              </InputLabel>
              <Select
                value={values.age}
                onChange={handleChange}
                input={<Input name="age" id="age-label-placeholder" />}
                displayEmpty
                name="age"
                className={classes.selectEmpty}
              >
                <MenuItem value="">
                  <em>Please Select</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={4} sm={3} md>
            <FormControl className={classes.formControl}>
              <InputLabel shrink htmlFor="age-label-placeholder">
                Custodian
              </InputLabel>
              <Select
                value={values.age}
                onChange={handleChange}
                input={<Input name="age" id="age-label-placeholder" />}
                displayEmpty
                name="age"
                className={classes.selectEmpty}
              >
                <MenuItem value="">
                  <em>Please Select</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={4} sm={3} md>
            {/* <InputLabel shrink htmlFor="age-label-placeholder">
              Warranty Date
            </InputLabel> */}
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
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
            <FormControl className={classes.formControl}>
              <InputLabel shrink htmlFor="age-label-placeholder">
                Service Department
              </InputLabel>
              <Select
                value={values.age}
                onChange={handleChange}
                input={<Input name="age" id="age-label-placeholder" />}
                displayEmpty
                name="age"
                className={classes.selectEmpty}
              >
                <MenuItem value="">
                  <em>Please Select</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={4} sm={3} md>
            <FormControl className={classes.formControl}>
              <InputLabel shrink htmlFor="age-label-placeholder">
                Maintenance Type
              </InputLabel>
              <Select
                value={values.age}
                onChange={handleChange}
                input={<Input name="age" id="age-label-placeholder" />}
                displayEmpty
                name="age"
                className={classes.selectEmpty}
              >
                <MenuItem value="">
                  <em>Please Select</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default AssetDataInfo;
