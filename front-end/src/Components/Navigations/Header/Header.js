import React, { useState } from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import twitter from "./twitter.png";

import {Menu, MenuItem} from '@material-ui/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faListAlt,
  faUser,
  faEllipsisH,
  faHashtag,
  faBookmark,
  faEnvelope,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { faFeather } from "@fortawesome/free-solid-svg-icons/faFeather";

export const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logOut = () => {

    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <div className="header">
            <nav className="navigation">
                <NavLink to={'/home'} exact ><img src={twitter} className="twitterLogo"/></NavLink>
                <NavLink to={'/home'} exact activeClassName="active" id="Navlinks">
                    <FontAwesomeIcon className="icons" icon={faHome} />
                    <span id="span">Inicio</span>
                </NavLink>
                <NavLink to={'/explore'} activeClassName="active" id="Navlinks">
                    <FontAwesomeIcon className="icons" icon={faHashtag} />
                    <span id="span">Explorar</span>
                </NavLink>
                <NavLink to={'/notifications'} activeClassName="active" id="Navlinks">
                    <FontAwesomeIcon className="icons" icon={faBell} />
                    <span id="span">Notificaciones</span>
                </NavLink>
                <NavLink to={'/messages'} activeClassName="active" id="Navlinks">
                    <FontAwesomeIcon className="icons" icon={faEnvelope} />
                    <span id="span">Mensajes</span>
                </NavLink>
                <NavLink to={'/bookmarks'} activeClassName="active" id="Navlinks">
                    <FontAwesomeIcon className="icons" icon={faBookmark} />
                    <span id="span">Guardados</span>
                </NavLink>
                <NavLink to={'/lists'} activeClassName="active" id="Navlinks">
                    <FontAwesomeIcon className="icons" icon={faListAlt} />
                    <span id="span">Listas</span>
                </NavLink>
                <NavLink to={'/profile'} activeClassName="active" id="Navlinks">
                    <FontAwesomeIcon className="icons" icon={faUser} />
                    <span id="span">Perfil</span>
                </NavLink>
                <br/>
                <div className="dropup">
                <NavLink to={'/settings'} activeClassName="active" id="Navlinks">
                    <FontAwesomeIcon className="icons" icon={faEllipsisH} />
                    <span id="span">Más opciones</span>
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
                <button className="tweetButton" id="Twtresponsive"><FontAwesomeIcon icon={faFeather} id="iconresponsive"/>
                <span id="span">Twittear</span></button>
                <button className="tweetButton" onClick={handleClick}>User</button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem>Añadir cuenta existente</MenuItem>
                    <MenuItem onClick={logOut}>Cerrar session</MenuItem>
                </Menu>
            </nav>
        </div>

    );
}