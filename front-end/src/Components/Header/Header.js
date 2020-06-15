import React from 'react';
import './Header.css';
import {
    NavLink,
    Link
} from "react-router-dom";
import twitter from './twitter.png';

export const Header = () => {
    return (
        <header className="header">
            <nav className="navigation">
                <NavLink to={'/home'}exact ><img src={twitter} className="twitterLogo"/></NavLink>
                <NavLink to={'/home'} exact activeClassName="active" id="Navlinks">Inicio</NavLink>
                <NavLink to={'/explore'} activeClassName="active" id="Navlinks">Explorar</NavLink>
                <NavLink to={'/notifications'} activeClassName="active" id="Navlinks">Notificaciones</NavLink>
                <NavLink to={'/bookmarks'} activeClassName="active" id="Navlinks">Guardados</NavLink>
                <NavLink to={'/lists'} activeClassName="active" id="Navlinks">Listas</NavLink>
                <NavLink to={'/profile'} activeClassName="active" id="Navlinks">Perfil</NavLink>
                <NavLink to={'/settings'} activeClassName="active" id="Navlinks">Más opciones</NavLink>
                <button className="tweetButton">Twittear</button>
            </nav>
        </header>
    );
}