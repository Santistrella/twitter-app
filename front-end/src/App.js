import React, { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { TopNav } from "./Components/Navigations/TopNav/Topnav";
import Header from "./Components/Navigations/Header/Header";
import Home from "./Components/Home/Home";
import { Profile } from "./Components/Profile/Profile";
import { Bookmarks } from "./Components/Bookmarks/Bookmarks";
import { Lists } from "./Components/Lists/Lists";
import { Messages } from "./Components/Messages/Messages";
import { Notifications } from "./Components/Notifs/Notifs";
import { News } from "./Components/News/News";
import { ExploreUser } from "./Components/Explore/ExploreUser/ExploreUser";
import PrivateRoute from "./Components/PrivateRoute";
import { Explore } from "./Components/Explore/Explore";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import { AlertTemplate } from "./Components/Alerts/AlertTemplate";
import { AuthProvider, useAuth } from "./Context/authentication.context";
import { tweetContextWrapper } from "./Components/Tweet/TweetContext";
import { commentTweetContextWrapper } from "./Components/Tweet/CommentContext/ModalContext";

const AppIndex = tweetContextWrapper(
  commentTweetContextWrapper(() => {
    const { auth } = useAuth();
    return (
      <Router>
        {!auth.logged && <Route path={"/"} component={Explore} />}
        <div className="App">
          {auth.logged && <Header />}
          {auth.logged && <TopNav />}
          <Switch>
            <PrivateRoute exact path={"/home"} component={Home} />
            <PrivateRoute path={"/explore/user"} component={ExploreUser} />
            <PrivateRoute path={"/profile/:id"} component={Profile} />
            <PrivateRoute path={"/bookmarks"} component={Bookmarks} />
            <PrivateRoute path={"/explore"} component={ExploreUser} />
            <PrivateRoute path={"/lists"} component={Lists} />
            <PrivateRoute path={"/messages"} component={Messages} />
            <PrivateRoute path={"/notifications"} component={Notifications} />
          </Switch>
          {auth.logged && <News />}
        </div>
      </Router>
    );
  })
);
function App() {
  useEffect(() => {
    const options = {
      position: positions.BOTTOM_CENTER,
      timeout: 50000,
      offset: "30px",
      transition: transitions.SCALE,
    };
  });

  return (
    <AuthProvider>
      <AlertProvider template={AlertTemplate}>
        <AppIndex />
      </AlertProvider>
    </AuthProvider>
  );
}

export default App;
