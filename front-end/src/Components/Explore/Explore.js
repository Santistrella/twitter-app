import React, {Fragment} from 'react';
import './Explore.css';
import landingexplore from './landingexplore.jpeg';




export const Explore = () => {
    return (
        <div className="column">
        <div className="explore">
            <img src={landingexplore} className="landingimage" />
            <div className="photodescrip">COVID-19: Alemania, China y Portugal enfrentan nuevos brotes</div>
        </div>
        </div>
    );
}