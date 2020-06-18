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
import {News} from "./Components/News/News";
import {TopNav} from "./Components/TopNav/Topnav";
import {Bookmarks} from "./Components/Bookmarks/Bookmarks";
import {Lists} from "./Components/Lists/Lists";
import {Messages} from "./Components/Messages/Messages";
import {Notifications} from "./Components/Notifs/Notifs";


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
            <Route path={'/bookmarks'} component={Bookmarks}/>
            <Route path={'/lists'} component={Lists}/>
            <Route path={'/messages'} component={Messages}/>
            <Route path={'/notifications'} component={Notifications} />
            <Redirect exact from="/" to="explore" />
            <News />
      </Router>
    </div>
  );
}

export default App;
