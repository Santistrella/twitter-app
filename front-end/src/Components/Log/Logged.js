import React, {Fragment} from 'react';

import './Logged.css';
import {TopNav} from "../TopNav/Topnav";
import {Header} from "../Header/Header";
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";
import {Home} from "../Home/Home";
import {Explore} from "../Explore/Explore";
import {Profile} from "../Profile/Profile";
import {Bookmarks} from "../Bookmarks/Bookmarks";
import {Lists} from "../Lists/Lists";
import {Messages} from "../Messages/Messages";
import {Notifications} from "../Notifs/Notifs";
import {News} from "../News/News";
import {ExploreUser} from "../Explore/ExploreUser";




export const Logged = () => {
    return (
        <div className="LoggedApp">
            <Router>
                <Header />
                <TopNav />
                <Route exact path={'/home'} component={Home} />
                <Route exact path={'/explore'} component={ExploreUser} />
                <Route path={'/profile'} component={Profile} />
                <Route path={'/bookmarks'} component={Bookmarks}/>
                <Route path={'/lists'} component={Lists}/>
                <Route path={'/messages'} component={Messages}/>
                <Route path={'/notifications'} component={Notifications} />
                <News />
            </Router>
        </div>
    );
}