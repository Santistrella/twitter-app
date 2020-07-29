import React from "react";
import "./ExploreUser.css";
import { ExploreTab } from "./ExploreTab";

export const ExploreUser = () => {
  return (
    <div className="ExploreUser">
      <div className="MainExploreContainer">
        <h3>Explorar</h3>
        <ExploreTab />
      </div>
    </div>
  );
};
