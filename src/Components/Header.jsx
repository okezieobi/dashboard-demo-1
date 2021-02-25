import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import NotificationIcon from '@material-ui/icons/Notifications';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Toolbar>
        <div className={classes.title}>
          <TextField size="small" variant="outlined" placeholder="Search" />
        </div>
        <NotificationIcon />
      </Toolbar>
    </div>
  );
}
