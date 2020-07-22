import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useForm, ErrorMessage } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
import "./Forms.css";

const Names = ({ setStep }) => {
  const { register, handleSubmit, errors } = useForm();
  const { action, state } = useStateMachine(updateAction);

  const onSubmit = (data) => {
    action(data);
    setStep("Password");
  };

  const useStyles = makeStyles((theme) => ({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

  const classes = useStyles();
  console.log(state.data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="First Name"
        inputRef={register({
          required: "Required",
        })}
        name="firstName"
        className={classes.textField}
        defaultValue={state.data.firstName}
      />
      {errors.FirstName && (
        <p className={classes.textField}>{errors.FirstName.message}</p>
      )}
      <TextField
        label="E-mail"
        name="email"
        defaultValue={state.data.email}
        className={classes.textField}
        inputRef={register({
          required: "Required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "invalid email address",
          },
        })}
      />
      {errors.email && <p className="errorsLogin">{errors.email.message}</p>}
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
