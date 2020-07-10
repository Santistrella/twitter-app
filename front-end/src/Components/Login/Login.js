import React, { useState } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import twittersidebar from "./twittersidebar.png";
import AuthService from "../../Services/auth.service";

export const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm();
  //const alert = useAlert()

  const onSubmit = (data) => {
    console.log(data);
    //alert.show('Oh look, an alert!')
    AuthService.login(data).then((response) => {
      console.log(response);
    });
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
          <button className="tweetButton">Regístrate</button>
        </form>
          <NavLink to="/register">
            <button className="tweetButton">Regístrate</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
