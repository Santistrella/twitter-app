import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MultipleStepForm from '../MultipleStepForm/MultipleStepForm'
import {BrowserRouter as Router} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

export const RegisterModal = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const useStyles = makeStyles((theme) => ({
    Button: {
      margin: "50px",
      width: 200
    }
  }));

  const classes = useStyles();

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} className={classes.Button}>
        Register
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Register</DialogTitle>
        <DialogContent>
            <MultipleStepForm/>
        </DialogContent>
      </Dialog>
    </div>
  );
}
