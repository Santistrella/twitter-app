import React from "react";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import { useForm, ErrorMessage } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
import authService from "../../../Services/auth.service";

const UserDescription = ({ setStep }) => {
  const { register, handleSubmit, errors } = useForm();
  const { action, state } = useStateMachine(updateAction);

  const onSubmit = (data) => {
    action(data);
    console.log(state.data);
    var body = {
      name: state.data.firstName,
      surname: state.data.lastName,
      password: state.data.password,
      email: state.data.email,
    };

    authService.register(body).then((response) => {
      console.log(response);
    });
  };

  const goBack = () => {
    setStep("ProfilePhoto");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextareaAutosize
        aria-label="minimum height"
        rowsMin={3}
        defaultValue={state.data.description}
        inputRef={register}
      />
      <div>
        <Button onClick={goBack}>Previous</Button>
        <Button type="submit">Done!</Button>
      </div>
    </form>
  );
};

export default UserDescription;
