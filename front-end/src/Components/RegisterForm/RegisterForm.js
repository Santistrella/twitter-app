import React from 'react';
import './RegisterForm.css';
import twitter from './twitter.png';



export const RegisterForm = () => {
    return (
        <div className="RegisterContainer">
            <div className="FormContainer">
                <img
                    src={twitter}
                    className="twitterLogo"
                />
            <h1>Crea tu cuenta</h1>
                <div id="Form">
                    <input
                    required="yes"
                    name="fname"
                    placeholder="Nombre"
                    autoComplete="off"
                    />
                    <input
                        required="yes"
                        name="lname"
                        placeholder="Apellidos"
                        autoComplete="off"
                    />
                    <input
                        required="yes"
                        name="name"
                        placeholder="Correo electronico"
                        autoComplete="off"
                    />
                    <input
                        type="password"
                        required="yes"
                        name="name"
                        placeholder="Contraseña"
                        autoComplete="off"
                    />
                    <input
                        type="password"
                        required="yes"
                        name="name"
                        placeholder="Verifica Contraseña"
                        autoComplete="off"
                    />
                    <button className="tweetButton">Crear Cuenta</button>
                </div>
            </div>
        </div>
    );
}