/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import HomeIcon from '@material-ui/icons/Home';
import Toolbar from '@material-ui/core/Toolbar';
import PeopleIcon from '@material-ui/icons/People';
import CardIcon from '@material-ui/icons/CardMembership';
import MessageIcon from '@material-ui/icons/MessageRounded';
import SettingsIcon from '@material-ui/icons/Settings';

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    backgroundColor: 'transparent',
    '& > span': {
      width: '100%',
      backgroundColor: '#635ee7',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#2979F2',
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100vh',
  },
  tabs: {
    borderRight: '1px solid #2979F2',
    paddingTop: theme.spacing(6),
    backgroundColor: '#F4F5FA',
  },
  tabIcon: {
    marginRight: theme.spacing(1),
  },
  lastTab: {
    flexGrow: 1,
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
      <StyledTabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs"
        className={classes.tabs}
        variant="fullWidth"
      >
        <StyledTab
          label={(
            <Toolbar>
              <HomeIcon className={classes.tabIcon} />
              Dashboard
            </Toolbar>
)}
          {...a11yProps(0)}
        />
        <StyledTab
          label={(
            <Toolbar>
              <PeopleIcon className={classes.tabIcon} />
              Companies
            </Toolbar>
)}
          {...a11yProps(1)}
        />
        <StyledTab
          label={(
            <Toolbar>
              <CardIcon className={classes.tabIcon} />
              Projects
            </Toolbar>
)}
          {...a11yProps(2)}
        />
        <StyledTab
          label={(
            <Toolbar>
              <MessageIcon className={classes.tabIcon} />
              Messages
            </Toolbar>
)}
          {...a11yProps(3)}
        />
        <StyledTab
          className={classes.lastTab}
          label={(
            <Toolbar>
              <SettingsIcon className={classes.tabIcon} />
              Settings
            </Toolbar>
)}
          {...a11yProps(4)}
        />
      </StyledTabs>
      <TabPanel value={value} index={0}>
        Dashboard
      </TabPanel>
      <TabPanel value={value} index={1}>
        Companies
      </TabPanel>
      <TabPanel value={value} index={2}>
        Projects
      </TabPanel>
      <TabPanel value={value} index={3}>
        Messages
      </TabPanel>
      <TabPanel value={value} index={4}>
        Settings
      </TabPanel>
    </div>
  );
}
