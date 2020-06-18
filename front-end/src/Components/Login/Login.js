import React from 'react';
import './Login.css';
import twitter from './twitter.png';



export const LoginForm = () => {
    return (
        <div className="LoginContainer">
            <div className="FormLogin">
                <img
                    src={twitter}
                    className="twitterLogo"
                />
                <h1>Inicia sesión</h1>
                <div id="Form">
                    <input
                        required="yes"
                        name="name"
                        placeholder="Teléfono, Correo o Usuario"
                        autoComplete="off"
                    />
                    <input
                        type="password"
                        required="yes"
                        name="name"
                        placeholder="Contraseña"
                        autoComplete="off"
                    />
                    <a href="#">¿Olvidaste tu contraseña?</a>
                    <button className="loginButton">Iniciar Sesión</button>
                    <button className="tweetButton">Regístrate</button>
                </div>
            </div>
        </div>
    );
}