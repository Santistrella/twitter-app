import React from "react";
import './Tweets.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRetweet, faCommentAlt, faHeart, faShareSquare} from "@fortawesome/free-solid-svg-icons";
import profilepic from './profilepic.jpg';


export const Tweets = tweet => {

    return (
        <div className="tweetContainer">
            <header>
                <img src={profilepic}
                     className="profile-thumbnail"/>
                    <div className="profile-name">
                        <h3>Nombre</h3>
                        <p>@usuario</p>
                    </div>
            </header>
            <div id="inner">
                <p>{tweet.tweet}</p>
            </div>
            <footer>
                <div className="cta">
                    <button id="commentBtn"><FontAwesomeIcon icon={faCommentAlt}  /></button>
                    <button id="RtwtBtn"><FontAwesomeIcon icon={faRetweet}  /></button>
                    <button id="LikeBtn" ><FontAwesomeIcon icon={faHeart}  /></button>
                    <button id="SendBtn" ><FontAwesomeIcon icon={faShareSquare} /></button>
                </div>
            </footer>
        </div>
    );
}