import React, {Fragment, useEffect} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Explore} from "./Components/Explore/Explore";
import {Profile} from "./Components/Profile/Profile";
import {Home} from "./Components/Home/Home";
import {Header} from "./Components/Header/Header";
import {Recommend} from "./Components/Recommend/Recommend";

function App() {

    useEffect(() => {
        document.title = "Twitter";
    });

  return (
    <Fragment>
      <Router>
          <Header />
          <Recommend />
         <Switch>
            <Route exact path={'/explore'} component={Explore} />
            <Route path={'/home'} component={Home} />
            <Route path={'/profile'} component={Profile} />
         </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
