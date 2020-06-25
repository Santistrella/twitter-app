import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm, ErrorMessage } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const Password = ({ setStep }) => {
  const { register, handleSubmit } = useForm();
  const { action, state } = useStateMachine(updateAction);

  const onSubmit = data => {
    action(data)
    setStep('ProfilePhoto')
  };

  const goBack = () => {
    setStep('Name')
  };

  return (
    <form onSubmit = {handleSubmit(onSubmit)}>
      <h3>You will need a password</h3>
      <TextField
        label="Password"
        type="password"
        name="password"
        defaultValue={state.data.password}
        inputRef={register} 
      />
      <div>
        <Button onClick={goBack}>Previous</Button>
        <Button type="submit">Next</Button>
      </div>
    </form>
  );
};

export default Password;