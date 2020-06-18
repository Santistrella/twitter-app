import React, {Fragment} from 'react';
import './Profile.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {LoginForm} from "../Login/Login";


export const Profile = () => {
    return (
        <div className="column">
        <div className="profile">
            <h1>Perfil</h1>
        </div>
        </div>
    );
}

