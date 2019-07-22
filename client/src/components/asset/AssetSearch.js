import React, { useRef, useEffect } from 'react';
import { searchAssetList, clearAssetFilter } from '../../actions/AssetActions';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

const AssetSearch = ({
  asset: { filtered },
  searchAssetList,
  clearAssetFilter
}) => {
  const classes = useStyles();
  const text = useRef('');

  useEffect(() => {
    if (filtered === null) {
      console.log('LETCHENG REF YAN');
      text.current.value = '';
    }
  });

  if (filtered !== null) {
    console.log(filtered);
  }

  const onChange = e => {
    if (e.target.value.trim() !== '') {
      searchAssetList(e.target.value.trim());
    } else {
      clearAssetFilter();
    }
  };

  return (
    <form>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <List component="nav" aria-label="Main mailbox folders">
            <ListItem button>
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <TextField
                id="standard-search"
                label="Filter Asset List..."
                type="search"
                className={classes.textField}
                margin="normal"
                ref={text}
                onChange={onChange}
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={4} />
      </Grid>
    </form>
  );
};

const mapStateToProps = state => ({
  asset: state.asset
});

export default connect(
  mapStateToProps,
  { searchAssetList, clearAssetFilter }
)(AssetSearch);
