/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import Toolbar from '@material-ui/core/Toolbar';
import PeopleIcon from '@material-ui/icons/People';
import CardIcon from '@material-ui/icons/CardMembership';
import MessageIcon from '@material-ui/icons/MessageRounded';
import SettingsIcon from '@material-ui/icons/Settings';

import Tabs from './Components/Tabs';
import Header from './Components/Header';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100vh',
  },
  tabs: {
    paddingTop: theme.spacing(6),
    backgroundColor: '#F4F5FA',
    height: '66vh',
  },
  tabIcon: {
    marginRight: theme.spacing(1),
  },
  tabItem: {
    marginTop: '18vh',
  },
}));

export default function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs.StyledTabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs"
        className={classes.tabs}
        variant="fullWidth"
      >
        <Tabs.StyledTab
          label={(
            <Toolbar>
              <HomeIcon className={classes.tabIcon} />
              Dashboard
            </Toolbar>
)}
          {...Tabs.a11yProps(0)}
        />
        <Tabs.StyledTab
          label={(
            <Toolbar>
              <PeopleIcon className={classes.tabIcon} />
              Companies
            </Toolbar>
)}
          {...Tabs.a11yProps(1)}
        />
        <Tabs.StyledTab
          label={(
            <Toolbar>
              <CardIcon className={classes.tabIcon} />
              Projects
            </Toolbar>
)}
          {...Tabs.a11yProps(2)}
        />
        <Tabs.StyledTab
          label={(
            <Toolbar>
              <MessageIcon className={classes.tabIcon} />
              Messages
            </Toolbar>
)}
          {...Tabs.a11yProps(3)}
        />
        <Tabs.StyledTab
          className={classes.tabItem}
          label={(
            <Toolbar>
              <SettingsIcon className={classes.tabIcon} />
              Settings
            </Toolbar>
)}
          {...Tabs.a11yProps(4)}
        />
      </Tabs.StyledTabs>
      <Tabs.TabPanel value={value} index={0}>
        <Header />
      </Tabs.TabPanel>
      <Tabs.TabPanel value={value} index={1}>
        Companies
      </Tabs.TabPanel>
      <Tabs.TabPanel value={value} index={2}>
        Projects
      </Tabs.TabPanel>
      <Tabs.TabPanel value={value} index={3}>
        Messages
      </Tabs.TabPanel>
      <Tabs.TabPanel value={value} index={4}>
        Settings
      </Tabs.TabPanel>
    </div>
  );
}
