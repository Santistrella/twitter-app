import React from "react";
import Button from '@material-ui/core/Button';
import { useForm, ErrorMessage } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
import TextField from '@material-ui/core/TextField';

const Contact = ({ setForm, formData, setStep }) => {
  const { register, handleSubmit, errors } = useForm();
  const { action, state } = useStateMachine(updateAction);

  const onSubmit = data => {
    action(data)
    setStep('Review')
  };

  const goBack = () => {
    setStep('Address')
  };

  return (
    <form onSubmit = {handleSubmit(onSubmit)}>
      <h3>Contact </h3>
      <TextField 
        label="Phone" 
        name="phone" 
        value={state.data.phone}
        inputRef={register}  
      />
      <TextField 
        label="E-mail" 
        name="email" 
        value={state.data.email} 
        inputRef={register}  
      />
      <div>
        <Button onClick={goBack}>Previous</Button>
        <Button type="submit">Next</Button>
      </div>
    </form>
  );
};

export default Contact;