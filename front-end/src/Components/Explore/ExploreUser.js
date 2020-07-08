import React from 'react';
import './ExploreUser.css';
import {RegisterModal} from '../RegisterModal/RegisterModal'
import {LoginForm} from "../Login/Login";


export const ExploreUser = () => {
    return (
        <div className="ExploreUser">
            <div className="MainExploreContainer">
                <h1>Explorar</h1>
                <h3>#Lorem Ipsum</h3>
                <p>#Lorem ipsum dolor sit amet</p>
                <RegisterModal/>
                <LoginForm />
            </div>
        </div>
    );
}