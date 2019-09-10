import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import { green } from '@material-ui/core/colors';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import JOMeter from '../joborder/JOMeter';
import JOMats from '../joborder/JOMats';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    minHeight: 200
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(2),
    background: 'linear-gradient(45deg, #e3f2fd 30%, #90caf9 90%)',
    boxShadow: '0 3px 5px 2px rgba(0,0,0,0.32)'
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(1),
    right: theme.spacing(3)
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600]
    }
  }
}));

const JOMain = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };

  const fabs = [
    {
      color: 'primary',
      className: classes.fab,
      icon: <AddIcon />,
      label: 'Add'
    },
    {
      color: 'secondary',
      className: classes.fab,
      icon: <EditIcon />,
      label: 'Edit'
    },
    {
      color: 'inherit',
      className: clsx(classes.fab, classes.fabGreen),
      icon: <UpIcon />,
      label: 'Expand'
    }
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab label="Information" {...a11yProps(0)} />
          <Tab label="Meter Reading" {...a11yProps(1)} />
          <Tab label="Materials" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <Paper className={classes.paper}>
          <TabPanel value={value} index={0} dir={theme.direction}>
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
          </TabPanel>
        </Paper>
        {/* <Paper className={classes.paper}> */}
        <TabPanel value={value} index={1} dir={theme.direction}>
          <JOMeter />
        </TabPanel>
        {/* </Paper> */}
        <Paper className={classes.paper}>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <JOMats />
          </TabPanel>
        </Paper>
      </SwipeableViews>
      {fabs.map((fab, index) => (
        <Zoom
          key={fab.color}
          in={value === index}
          timeout={transitionDuration}
          style={{
            transitionDelay: `${
              value === index ? transitionDuration.exit : 0
            }ms`
          }}
          unmountOnExit
        >
          <Fab
            aria-label={fab.label}
            className={fab.className}
            color={fab.color}
          >
            {fab.icon}
          </Fab>
        </Zoom>
      ))}
    </div>
  );
};
export default JOMain;
