import React, {useState} from 'react';
import './Login.css';
import twitter from './twitter.png';
import {NavLink} from "react-router-dom";
import twittersidebar from './twittersidebar.png';


export const LoginForm = () => {

    const initialState = {
        email: "",
        password: "",
        errorMessage: undefined,
    };

    const [data, setData] = useState(initialState);

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };

    const handleFormSubmit = () => {
        fetch("http://localhost/api/login", {
            method: "post",
            mode: "cors",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw res;
            })
    };


    return (
        <div className="LoginContainer">
            <div className="FormLogin">
                <img src={twittersidebar} className="sidebarimage" />
                <h3>Mira lo que está pasando en el mundo en este momento</h3>
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
                    <button className="loginButton"
                            onClick={() => handleFormSubmit()}
                    >Iniciar Sesión</button>
                    <NavLink to="/register"><button className="tweetButton">Regístrate</button></NavLink>
                </div>
            </div>
        </div>
    );
}