import React from "react";
import "./ExploreNav.css";
import twitter from "./twitter.png";

export const ExploreNav = () => {
  return (
    <nav className="ExploreNavbar">
      <img alt="logo twitter" src={twitter} className="twitterLogo" />
      <input placeholder="  Buscar en Twitter" className="ExploreSearch" />
      <button className="ExploreloginButton">Iniciar Sesión</button>
      <button className="ExploretweetButton">Regístrate</button>
    </nav>
  );
};
