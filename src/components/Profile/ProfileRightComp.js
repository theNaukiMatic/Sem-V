import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import ProfileAbout from './ProfileAboutComp';
import ProfileReviews from './ProfileReviewsComp';
import ProfilePosts from './ProfilePostsComp';
import ProfileProjects from './ProfileProjectsComp';
import {  } from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  root2: {
    justifyContent: "center"
  },
  scroller: {
    flexGrow: "0"
  }
}));
  
const  ProfileRight = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <div container className={classes.root}>
        <AppBar position="static" color="transparent">
        <Tabs
        classes={{ root: classes.root2, scroller: classes.scroller }}
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="primary"
          centered
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="About"  {...a11yProps(0)} />
          <Tab label="Projects" {...a11yProps(1)} />
          <Tab label="Reviews" {...a11yProps(2)} />
          <Tab label="Posts" {...a11yProps(3)} />
        </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <ProfileAbout />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ProfileProjects/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ProfileReviews />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <ProfilePosts />
        </TabPanel>
      </div>
    );
  }
export default ProfileRight;