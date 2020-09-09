import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

export const AlertTemplate = ({ message, options, style }) => {

  const useStyles = makeStyles({
    Alert: {
      margin: style.margin
    }
  });
  
  const classes = useStyles();

  return (
      <Alert className={classes.Alert} severity={options.type}>{message}</Alert>
  )
}

