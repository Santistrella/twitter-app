import React, { Fragment } from "react";
import "./Explore.css";
import { LoginForm } from "../Login/Login";
import { ExploreNav } from "../Navigations/ExploreNav/ExploreNav";
import { ExploreUser } from "./ExploreUser";

export const Explore = () => {
  console.log("explore");
  return (
    <div className="mainExplore">
      <ExploreNav />
      <ExploreUser />
      <LoginForm />
    </div>
  );
};
