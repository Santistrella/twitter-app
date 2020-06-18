import React, {Fragment} from 'react';
import './Profile.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {RegisterForm} from "../RegisterForm/RegisterForm";

export const Profile = () => {
    return (
        <div className="column">
        <div className="profile">
            <RegisterForm />
        </div>
        </div>
    );
}

