import React, {useEffect, Fragment} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {Explore} from "./Components/Explore/Explore";
import {Profile} from "./Components/Profile/Profile";
import {Home} from "./Components/Home/Home";
import {Header} from "./Components/Header/Header";
import {News} from "./Components/News/News";
import {TopNav} from "./Components/TopNav/Topnav";
import {Bookmarks} from "./Components/Bookmarks/Bookmarks";
import {Lists} from "./Components/Lists/Lists";
import {Messages} from "./Components/Messages/Messages";
import {Notifications} from "./Components/Notifs/Notifs";
import {Logged} from "./Components/Log/Logged";
import {NoLog} from "./Components/Log/NoLog";


function App() {

    useEffect(() => {
        document.title = "Twitter";
    });

  return (
    <Fragment>
      <Router>
            <Route exact path={'/'} component={NoLog} />
            <Route path={'/user'} component={Logged} />
      </Router>
    </Fragment>
  );
}

export default App;
