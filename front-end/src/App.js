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
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import {AlertTemplate} from './Components/Alerts/AlertTemplate'


function App() {

  useEffect(() => {
      document.title = "Twitter";
  });
  const logged = false;
  const options = {
    position: positions.BOTTOM_CENTER,
    timeout: 50000,
    offset: '30px',
    transition: transitions.SCALE,
    type: 'error'
  }

  return (
    <AlertProvider template={AlertTemplate} {...options}>
        {logged ? <Logged/> : <Nologged />}
    </AlertProvider>
  );
}

export default App;
