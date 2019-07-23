import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));

const AssetData = () => {
  const [values, setValues] = useState({
    name: 'Cat in the Hat',
    longname: 'Super Long name Testing Only Oh yeah',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR'
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={4} sm={3} md>
          <TextField
            id="outlined-name"
            label="Asset Code"
            className={classes.textField}
            value={values.name}
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
            value={values.longname}
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
            value={values.name}
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
          <TextField
            id="outlined-name"
            label="Asset Status"
            className={classes.textField}
            value={values.name}
            onChange={handleChange('name')}
            margin="normal"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={4} sm={3} md>
          <TextField
            id="outlined-name"
            label="Asset Category"
            className={classes.textField}
            value={values.longname}
            onChange={handleChange('name')}
            margin="normal"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={4} sm={3} md>
          <TextField
            id="outlined-name"
            label="Asset SubCategory"
            className={classes.textField}
            value={values.name}
            rows="4"
            onChange={handleChange('name')}
            margin="normal"
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={6} sm={3} md>
          <TextField
            id="outlined-name"
            label="Asset Name"
            className={classes.textField}
            value={values.longname}
            multiline
            onChange={handleChange('name')}
            margin="normal"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={3} md>
          <TextField
            id="outlined-name"
            label="Asset Description"
            className={classes.textField}
            value={values.name}
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
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mi
            eros, lobortis at elementum vel, ultricies sit amet nibh. Duis
            varius rhoncus diam ac commodo. Phasellus ultrices lacinia ultrices.
            Fusce dictum leo sit amet risus viverra condimentum. Etiam mauris
            augue, vehicula sit amet vulputate quis, elementum in tortor. Duis
            nunc arcu, efficitur et placerat non, sodales id neque. Phasellus
            hendrerit dolor enim, sed efficitur diam sollicitudin sit amet.
            Donec pharetra enim at porta vehicula. Sed odio sem, blandit at
            dolor ac, iaculis finibus nibh. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Proin porta ultrices tincidunt. Donec
            ut finibus metus. Donec convallis facilisis arcu eu hendrerit.
            Quisque at neque vulputate, pharetra enim at, ornare justo. Nullam
            auctor elit accumsan urna convallis maximus. Ut interdum lobortis
            fermentum. Nulla nulla diam, imperdiet nec scelerisque eu, gravida a
            quam. Duis feugiat at dui sed aliquet. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia Curae;
            Suspendisse vel ligula pulvinar, ullamcorper ex et, tempus elit.
            Nunc volutpat eleifend tellus, ac luctus ante mollis quis. Integer
            mollis dapibus facilisis. Sed consequat at mi vel varius. Vestibulum
            egestas orci in nisl accumsan, dignissim dapibus lorem commodo. Duis
            aliquet vehicula orci. Etiam non vehicula eros, et lobortis ante.
            Donec nulla enim, mollis at est sed, vulputate mattis magna. Etiam
            tempor dui metus, sit amet consequat urna tincidunt quis. Praesent
            iaculis ex dui, eget tincidunt lectus tincidunt et. Donec tincidunt
            nisi ut nisi ultricies, ut cursus mi consectetur. Aliquam erat
            volutpat. Fusce luctus mauris quis eros pharetra convallis. In vel
            mollis ligula. Donec sed sapien eros. Ut sed cursus felis, eu
            suscipit orci. Etiam ullamcorper lorem id sapien consequat, sed
            gravida nibh pellentesque. Ut in feugiat lectus. Fusce tincidunt
            dapibus dictum. Curabitur sed ullamcorper lorem. Aenean sit amet
            felis dapibus, commodo augue a, vestibulum risus. Pellentesque id
            efficitur urna. Sed quis lacus blandit, scelerisque augue eu,
            bibendum tellus. Sed in placerat nisl. Pellentesque congue et est in
            luctus. Nam malesuada nibh accumsan hendrerit elementum. Curabitur
            vehicula orci at nisi varius, sed vulputate tortor aliquam. Donec
            tincidunt non dolor et pretium. Quisque consequat rutrum lectus id
            tempor. Vivamus ut sem sed est dignissim condimentum. Ut eget est
            libero. Nulla at nulla ipsum. Sed eleifend vulputate ornare.
            Pellentesque sit amet venenatis felis, id aliquet tortor. In
            pellentesque iaculis mauris, in feugiat dui gravida sed. Vestibulum
            venenatis enim a tellus tincidunt, in semper dui dapibus. Sed tempus
            turpis ut neque vulputate efficitur.
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default AssetData;
