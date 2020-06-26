import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm, ErrorMessage } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const Names = ({ setStep }) => {
  //const { firstName, lastName, nickName } = formData;
  const { register, handleSubmit } = useForm();
  const { action, state } = useStateMachine(updateAction);

  const onSubmit = data => {
    action(data)
    setStep('Password')
  };

  const useStyles = makeStyles((theme) => ({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

  const classes = useStyles();
  console.log(state.data)

  return (
    <form onSubmit = {handleSubmit(onSubmit)}>
      <TextField
       label="First Name"
       inputRef={register}  
       name="FirstName"
       defaultValue={state.data.firstName}
       />
      <TextField 
        label="E-mail" 
        name="email" 
        defaultValue={state.data.email} 
        inputRef={register}  
      />
      <TextField
        label="Birthday"
        name="birtDate" 
        type="date"
        defaultValue={state.data.birthDate}
        inputRef={register}  
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <div>
        <Button disabled>Previous</Button>
        <Button type="submit">Next</Button>
      </div>
    </form>
  );
};

export default Names;
