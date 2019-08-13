import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import { connect } from 'react-redux';
import { SaveAssetInfo } from '../../actions/AssetActions';

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

const AssetDataButtons = ({ asset: { assetdata }, SaveAssetInfo }) => {
  const classes = useStyles();

  const SaveClick = e => {
    e.preventDefault();
    SaveAssetInfo(assetdata);
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={6} />
        <Grid item xs={4} />
        <Grid item xs={2}>
          <Tooltip title="Click To Save Asset" aria-label="Add">
            <Fab
              style={violetstyle}
              aria-label="View"
              className={classes.fab}
              onClick={SaveClick}
            >
              <SaveIcon />
            </Fab>
          </Tooltip>
          <Tooltip title="Cancel to Clear Form" aria-label="Add">
            <Fab style={redstyle} aria-label="Edit" className={classes.fab}>
              <CancelIcon />
            </Fab>
          </Tooltip>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = state => ({
  asset: state.asset
});

export default connect(
  mapStateToProps,
  { SaveAssetInfo }
)(AssetDataButtons);
