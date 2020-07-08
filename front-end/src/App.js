import React, { useEffect, Fragment } from "react";
import "./App.css";

import { Logged } from "./Components/Logged User/Logged";
import { NoLog } from "./Components/NonLogged/NoLog";

function App() {
  useEffect(() => {
    document.title = "Twitter";
  });
  const logged = false;

  return <Fragment>{logged ? <Logged /> : <NoLog />}</Fragment>;
}

export default App;
