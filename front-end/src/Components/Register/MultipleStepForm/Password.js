import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
import "./Forms.css";

const Password = ({ setStep }) => {
  const { register, handleSubmit, errors } = useForm();
  const { action, state } = useStateMachine(updateAction);

  const onSubmit = (data) => {
    action(data);
    setStep("ProfilePhoto");
  };

  const goBack = () => {
    setStep("Name");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>You will need a password</h3>
      <TextField
        label="Password"
        type="password"
        name="password"
        defaultValue={state.data.password}
        inputRef={register({
          required: "You must specify a password",
          minLength: {
            value: 8,
            message: "Password must have at least 8 characters",
          },
          pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i,
            message:
              "Password must contain at least one number, one uppercase letter and one special character",
          },
        })}
      />
      {errors.password && (
        <p className="errorsLogin">{errors.password.message}</p>
      )}
      <div>
        <Button onClick={goBack}>Previous</Button>
        <Button type="submit">Next</Button>
      </div>
    </form>
  );
};

export default Password;
