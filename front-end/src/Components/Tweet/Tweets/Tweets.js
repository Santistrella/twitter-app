import React from "react";
import './Tweets.css';


export const Tweets = tweet => {

    return (
        <div className="tweetContainer">
            <header>
                <img src={tweet.avatar}
                     className="profile-thumbnail"/>
                    <div className="profile-name">
                        <h3>{tweet.name}</h3>
                        <h4>{tweet.profile}</h4>
                    </div>
                    <div className="follow-btn">
                        <button>Follow</button>
                    </div>
            </header>
            <div id="inner">
                <p>{tweet.text}</p>
                <hr/>
            </div>
            <footer>
                <div className="cta">
                    <button className="share-btn">Share</button>
                    <button className="retweet-btn">Retweet</button>
                    <button className="like-btn">Like</button>
                </div>
            </footer>
        </div>
    );
}