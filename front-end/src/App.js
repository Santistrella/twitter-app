import React, {useEffect, Fragment} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {Logged, Nologged} from "./Components/Logged User/Logged";
import {NoLog} from "./Components/NonLogged/NoLog";


function App() {

    useEffect(() => {
        document.title = "Twitter";
    });
  const logged = false;

  return (
    <Fragment>
      <Router>
        <Route path={'/explore'} component={NoLog} />
        <Route path={'/user'} component={Logged} />
      </Router>
        {logged ? <Logged/> : <Nologged />}
    </Fragment>
  );
}

export default App;
