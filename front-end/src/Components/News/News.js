import React from 'react';
import './News.css';
import {
    NavLink,
    Link
} from "react-router-dom";
import {LoginForm} from "../Login/Login";


export const News = () => {
    return (
        <div className="NewsContainer">
           <div className="RecommendDiv">
               <LoginForm />
               <div className="Whatshappening">
                   <h3>Qué está pasando</h3>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan ex eget tortor accumsan lacinia. In eu massa viverra, fringilla nisi vitae, lacinia velit. Vivamus ullamcorper sapien ac felis efficitur semper. Quisque lobortis sem sit amet lorem feugiat ornare. Vestibulum bibendum consectetur neque. Sed fringilla sagittis euismod. Nam sit amet blandit odio. Donec sem magna, volutpat in auctor ut, pulvinar id dui. Nullam eleifend diam sed justo cursus scelerisque. Etiam consectetur malesuada tellus, eget maximus velit posuere a. </p>
               </div>
               <div className="WhoToFollow">
                   <h3>A quién seguir</h3>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan ex eget tortor accumsan lacinia. In eu massa viverra, fringilla nisi vitae, lacinia velit. Vivamus ullamcorper sapien ac felis efficitur semper. Quisque lobortis sem sit amet lorem feugiat ornare. Vestibulum bibendum consectetur neque. Sed fringilla sagittis euismod. Nam sit amet blandit odio. Donec sem magna, volutpat in auctor ut, pulvinar id dui. Nullam eleifend diam sed justo cursus scelerisque. Etiam consectetur malesuada tellus, eget maximus velit posuere a. </p>
               </div>
           </div>
        </div>
    );
}