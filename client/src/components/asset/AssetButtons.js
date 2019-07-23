import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import ViewIcon from '@material-ui/icons/VisibilityRounded';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

const violetstyle = {
  background: 'linear-gradient(45deg, #304ffe 30%, #90caf9 90%)',
  color: 'white',
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  margin: 0,
  top: 'auto',
  right: 180,
  bottom: 20,
  left: 'auto',
  position: 'fixed'
};

const bluestyle = {
  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  color: 'white',
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  margin: 0,
  top: 'auto',
  right: 100,
  bottom: 20,
  left: 'auto',
  position: 'fixed'
};

const redstyle = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  color: 'white',
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed'
};

export default function AssetButtons() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={6} />
        <Grid item xs={3} />
        <Grid item xs={3}>
          <Tooltip title="Click Table then View Assets" aria-label="Add">
            <Fab style={violetstyle} aria-label="View" className={classes.fab}>
              <ViewIcon />
            </Fab>
          </Tooltip>
          <Tooltip title="Add New Asset" aria-label="Add">
            <Fab style={bluestyle} aria-label="Add" className={classes.fab}>
              <AddIcon />
            </Fab>
          </Tooltip>
          <Tooltip title="Update Asset" aria-label="Add">
            <Fab style={redstyle} aria-label="Edit" className={classes.fab}>
              <EditIcon />
            </Fab>
          </Tooltip>
        </Grid>
      </Grid>
    </div>
  );
}
