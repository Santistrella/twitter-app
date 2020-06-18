import React, {useState} from 'react';
import './Header.css';
import {
    NavLink,
    Link
} from "react-router-dom";
import twitter from './twitter.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faListAlt, faUser, faEllipsisH, faHashtag, faBookmark, faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {


    return (
        <div className="header">
            <nav className="navigation">
                <NavLink to={'/home'} exact ><img src={twitter} className="twitterLogo"/></NavLink>
                <NavLink to={'/home'} exact activeClassName="active" id="Navlinks">
                    <FontAwesomeIcon className="icons" icon={faHome} />
                    Inicio
                </NavLink>
                <NavLink to={'/explore'} activeClassName="active" id="Navlinks">
                    <FontAwesomeIcon className="icons" icon={faHashtag} />
                    Explorar
                </NavLink>
                <NavLink to={'/notifications'} activeClassName="active" id="Navlinks">
                    <FontAwesomeIcon className="icons" icon={faBell} />
                    Notificaciones
                </NavLink>
                <NavLink to={'/messages'} activeClassName="active" id="Navlinks">
                    <FontAwesomeIcon className="icons" icon={faEnvelope} />
                    Mensajes
                </NavLink>
                <NavLink to={'/bookmarks'} activeClassName="active" id="Navlinks">
                    <FontAwesomeIcon className="icons" icon={faBookmark} />
                    Guardados
                </NavLink>
                <NavLink to={'/lists'} activeClassName="active" id="Navlinks">
                    <FontAwesomeIcon className="icons" icon={faListAlt} />
                    Listas
                </NavLink>
                <NavLink to={'/profile'} activeClassName="active" id="Navlinks">
                    <FontAwesomeIcon className="icons" icon={faUser} />
                    Perfil
                </NavLink>
                <br/>
                <div className="dropup">
                <NavLink to={'/settings'} activeClassName="active" id="Navlinks">
                    <FontAwesomeIcon className="icons" icon={faEllipsisH} />
                    Más opciones
                </NavLink>
                    <div className="dropup-content">
                        <a href="#">Temas</a>
                        <a href="#">Momentos</a>
                        <a href="#">Twitter Ads</a>
                        <a href="#">Analytics</a>
                        <a href="#">Configuración y privacidad</a>
                        <a href="#">Ayuda</a>
                        <a href="#">Pantalla</a>
                    </div>
                </div>
                <button className="tweetButton">Twittear</button>
            </nav>
        </div>

    );
}