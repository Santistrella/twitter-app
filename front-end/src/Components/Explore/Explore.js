import React, {Fragment} from 'react';
import './Explore.css';
import {RegisterForm} from '../RegisterForm/RegisterForm'
import {RegisterModal} from '../RegisterModal/RegisterModal'
import {LoginForm} from "../Login/Login";
import {ExploreNav} from "../Navigations/ExploreNav/ExploreNav";
import {ExploreUser} from "./ExploreUser";





export const Explore = () => {
    return (            
        <div className="mainExplore">
            <ExploreNav />
            <ExploreUser />
            <LoginForm />
            <RegisterModal/>
        </div>
    );
}