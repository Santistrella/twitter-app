import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm, ErrorMessage } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import Fab from "@material-ui/core/Fab";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import Grid from "@material-ui/core/Grid";

const ProfilePhoto = ({ setStep }) => {
  const { register, handleSubmit, errors } = useForm();
  const { action, state } = useStateMachine(updateAction);

  const onSubmit = data => {
    console.log(data.image[0])
    action(data)
    setStep('UserDescription')
  };

  const useStyles = makeStyles((theme) => ({
    input: {
      display: "none"
    },
    button: {
      margin: 10
    }
  }));

  const goBack = () => {
    setStep('Password')
  };

  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center">
      <form onSubmit = {handleSubmit(onSubmit)}>
        <h3>Upload an image</h3>
          <label>
              <Fab component="span" className={classes.button}>
                <AddPhotoAlternateIcon />
                <TextField
                  accept="image/*"
                  inputRef={register}
                  className={classes.input}
                  type="file"
                  name="image"
                />
              </Fab>
          </label>
        <div>
          <Button onClick={goBack}>Previous</Button>
          <Button type="submit">Next</Button>
        </div>
      </form>
    </Grid>
  );
};

export default ProfilePhoto;