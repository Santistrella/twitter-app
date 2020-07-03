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
  const logged = true;

  return (
    <Fragment>
        {logged ? <Logged/> : <Nologged />}
    </Fragment>
  );
}

export default App;
