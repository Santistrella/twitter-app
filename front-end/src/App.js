import React, { useEffect, Fragment } from "react";
import "./App.css";
>>>>>>>>> Temporary merge branch 2

import { Logged } from "./Components/Logged User/Logged";
import { NoLog } from "./Components/NonLogged/NoLog";
import authHeader from "./Api/authHeader";

function App() {
  const token = localStorage.getItem("user");

  return <Fragment>{token ? <Logged /> : <NoLog />}</Fragment>;
}

export default App;
