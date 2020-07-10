import React from "react";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Explore } from "../Explore/Explore";
import "./NoLog.css";

export const NoLog = () => {
  return (
    <div className="NologgedApp">
      <Router>
        <Route exact path={"/explore"} component={Explore} />
      </Router>
    </div>
  );
};
