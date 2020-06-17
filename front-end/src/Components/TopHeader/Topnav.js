import React from 'react';
import './Topnav.css';


export const TopNav = () => {

    return (
        <nav className="TopNavbar">
            <div className="NavigationContainer">
            <h3>Inicio</h3>
            </div>
            <div className="SearchBarContainer">
            <input
                placeholder="  Buscar en Twitter"
                className="SearchBar"
            />
            </div>
        </nav>
    );
}