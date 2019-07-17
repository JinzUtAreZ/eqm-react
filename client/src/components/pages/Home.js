import React from 'react';
import Grid from '@material-ui/core/Grid';

const Home = () => {
  return (
    <div>
      <h2>Home Page </h2> <br />
      <Grid
        justify="space-between" // Add it here :)
        container
        spacing={2}
      >
        <img src={require('../images/download.png')} alt="" style={imgSize} />
        <img src={require('../images/asshole.png')} alt="" style={imgSize} />
        <img src={require('../images/hell.jpg')} alt="" style={imgSize} />
      </Grid>
    </div>
  );
};

const imgSize = {
  width: '300px',
  height: '300px'
};

export default Home;
