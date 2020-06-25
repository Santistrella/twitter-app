import React, {Fragment} from 'react';
import './Explore.css';
import {RegisterForm} from '../RegisterForm/RegisterForm'
import {RegisterModal} from '../RegisterModal/RegisterModal'



export const Explore = () => {
    return (
        <div className="column">
        <div className="explore">
            <h1>Explore</h1>
        </div>
            <RegisterModal/>
        </div>
    );
}