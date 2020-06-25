import React, {Fragment} from 'react';

import {BrowserRouter as Router, Route} from "react-router-dom";
import {Explore} from "../Explore/Explore";
import './NoLog.css';



export const NoLog = () => {
    return (
        <div className="NologgedApp">
            <Router>
                <Route exact path={'/'} component={Explore} />
            </Router>
        </div>
    );
}