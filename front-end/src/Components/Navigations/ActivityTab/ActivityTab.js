import React from "react";
import "./ActivityTab.css";
import { NavLink, BrowserRouter as Router, Route } from "react-router-dom";
import { Tweets } from "../../Tweet/Tweets/Tweets";

export const ActivityTab = () => {
  return (
    <div className="ActivityTab">
      <nav className="ActTabContainer">
        <NavLink to={"/profile"} id="ActTabNavLink" activeClassName="active">
          Tweets
        </NavLink>
        <NavLink to={Tweets} id="ActTabNavLink" activeClassName="active">
          Respuestas
        </NavLink>
        <NavLink to={Tweets} id="ActTabNavLink" activeClassName="active">
          Multimedia
        </NavLink>
        <NavLink to={Tweets} id="ActTabNavLink" activeClassName="active">
          Me gusta
        </NavLink>
      </nav>
    </div>
  );
};
