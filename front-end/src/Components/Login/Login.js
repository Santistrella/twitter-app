import React, {useState} from 'react';
import './Login.css';
import twitter from './twitter.png';
import {NavLink} from "react-router-dom";
import { useForm } from "react-hook-form";
import twittersidebar from './twittersidebar.png';
import AuthService from '../../Services/auth.service'
import { useAlert } from 'react-alert'

export const LoginForm = () => {
    const { register, handleSubmit, errors } = useForm();
    const alert = useAlert()

    const onSubmit = (data) => {
        console.log(data)
        alert.show('Oh look, an alert!')
        AuthService.login(data).then(response => {
            console.log(response)
            if (response.status > 400) {

            }
        })
    };

    return (
        <div className="LoginContainer">
            <div className="FormLogin">
                <img src={twittersidebar} className="sidebarimage" />
                <h3>Mira lo que está pasando en el mundo en este momento</h3>
                <form onClick={handleSubmit(onSubmit)}  id="Form">
                    <input
                        name="name"
                        placeholder="Teléfono, Correo o Usuario"
                        autoComplete="off"
                        ref={register({
                            required: "This field is required"
                        })}
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                    <input
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        autoComplete="off"
                        ref={register({
                            required: "This field is required"
                        })}
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                    <a href="#">¿Olvidaste tu contraseña?</a>
                    <button className="loginButton" type="submit">Iniciar Sesiónn</button>
                    <NavLink to="/register"><button className="tweetButton">Regístrate</button></NavLink>
                </form>
            </div>
        </div>
    );
}