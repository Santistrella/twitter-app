import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Logged.css";
import { TopNav } from "../Navigations/TopNav/Topnav";
import { Header } from "../Navigations/Header/Header";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { Home } from "../Home/Home";
import { Profile } from "../Profile/Profile";
import { Bookmarks } from "../Bookmarks/Bookmarks";
import { Lists } from "../Lists/Lists";
import { Messages } from "../Messages/Messages";
import { Notifications } from "../Notifs/Notifs";
import { News } from "../News/News";
import { ExploreUser } from "../Explore/ExploreUser";
import authHeader from "../../Api/authHeader";

export const Logged = () => {
  return (
    <div className="LoggedApp">
      <Router>
        <Header />
        <TopNav />
        <Route exact path={"/home"} component={Home} />
        <Route exact path={"/explore/user"} component={ExploreUser} />
        <Route path={"/profile/:id"} component={Profile} />
        <Route path={"/bookmarks"} component={Bookmarks} />
        <Route path={"/lists"} component={Lists} />
        <Route path={"/messages"} component={Messages} />
        <Route path={"/notifications"} component={Notifications} />
        <News />
      </Router>
    </div>
  );
};
