import React, {useEffect} from 'react';
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
import {News} from "./Components/Recommend/News";
import {TopNav} from "./Components/TopHeader/Topnav";

function App() {

    useEffect(() => {
        document.title = "Twitter";
    });

  return (
    <div className="App">
      <Router>
          <Header />
          <TopNav />
          <Route path={'/home'} component={Home} />
            <Route exact path={'/explore'} component={Explore} />
            <Route path={'/profile'} component={Profile} />
            <Redirect exact from="/" to="explore" />
            <News />
      </Router>
    </div>
  );
}

export default App;
