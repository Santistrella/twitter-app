import React, { Fragment } from "react";
import "./ExploreNav.css";
import twitter from "./twitter.png";

export const ExploreNav = () => {
  return (
    <nav className="ExploreNavbar">
      <img alt="logo twitter" src={twitter} className="twitterLogo" />
      <input placeholder="  Buscar en Twitter" className="ExploreSearch" />
      <a href={"/explore"}>
        <button className="ExploreloginButton">Iniciar Sesión</button>
      </a>
      <button className="ExploretweetButton">Regístrate</button>
    </nav>
  );
};
