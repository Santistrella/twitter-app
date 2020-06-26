import React from "react";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import { useForm, ErrorMessage } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
import Api from "../../Api/index";

const UserDescription = ({ setStep }) => {
  const { register, handleSubmit } = useForm();
  const { action, state } = useStateMachine(updateAction);

  const onSubmit = data => {
    action(data)
    console.log(state.data)


  }

  const goBack = () => {
    setStep('ProfilePhoto')
  };

  const send = () => {
    var body = {
      name: state.data.firstName,
      surname: state.data.lastName,
      password: state.data.password,
      email: state.data.email
    }
    
    Api.createResource(body, 'user').then((res) => {
      console.log(res)
    });
/*
    fetch("http://localhost/api/user", {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(response => {
      console.log(response)
    })*/
  }

  return (
    <div>
      <TextareaAutosize 
        aria-label="minimum height" 
        rowsMin={3} 
        defaultValue={state.data.description}
        inputRef={register}  
      />
      <div>
        <Button onClick={goBack}>Previous</Button>
        <Button onClick={send}>Done!</Button>
      </div>
    </div>
  );
};

export default UserDescription;