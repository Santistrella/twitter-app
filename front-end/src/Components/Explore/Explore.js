import React, { Fragment } from "react";
import "./Explore.css";
import { RegisterModal } from "../Register/RegisterModal/RegisterModal";
import { LoginForm } from "../Login/Login";
import { ExploreNav } from "../Navigations/ExploreNav/ExploreNav";
import { ExploreUser } from "./ExploreUser";

export const Explore = () => {
  return (
    <div className="mainExplore">
      <ExploreNav />
      <ExploreUser />
      <LoginForm />
    </div>
  );
};
