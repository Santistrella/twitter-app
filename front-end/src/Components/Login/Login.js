import React from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import twittersidebar from "./twittersidebar.png";
import AuthService from "../../Services/auth.service";
import { useAlert } from "react-alert";
import { RegisterModal } from "../Register/RegisterModal/RegisterModal";
import { TextField } from "@material-ui/core";
import { useAuth } from "../../Context/authentication.context";

export const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const alert = useAlert();
  const history = useHistory();

  const { authenticate } = useAuth();

  const onSuccessLogin = (token) => {
    authenticate(token);
    history.push("/home");
  };

  const onSubmit = (data) => {
    console.log(data);
    //alert.show('Oh look, an alert!')
    AuthService.login(data, onSuccessLogin);
  };

  return (
    <div className="LoginContainer">
      <div className="FormLogin">
        <img src={twittersidebar} className="sidebarimage" />
        <h3>Mira lo que está pasando en el mundo en este momento</h3>
        <form onClick={handleSubmit(onSubmit)} id="Form">
          <input
            name="email"
            placeholder="Teléfono, Correo o Usuario"
            autoComplete="off"
            ref={register({
              required: "This field is required",
            })}
          />
          {errors.name && <p className="errorsLogin">{errors.name.message}</p>}
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            autoComplete="off"
            ref={register({
              required: "This field is required",
            })}
          />
          {errors.password && (
            <p className="errorsLogin">{errors.password.message}</p>
          )}
          <a href="#">¿Olvidaste tu contraseña?</a>
          <button className="loginButton" type="submit">
            Iniciar Sesión
          </button>
        </form>
        <RegisterModal />
      </div>
    </div>
  );
};
