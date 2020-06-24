import React, {useEffect, useState} from 'react';
import './Home.css';
import {Tweets} from "../Tweets/Tweets";





export const Home = () => {

    const [tweet, setTweet] = useState();
    useEffect(() => {
        fetch("http://localhost:5008/tweets")
            .then(response => response.json())
            .then(usersFromResponse => {
                setTweet(usersFromResponse);
            });
    }, [])

    return (
        <div className="Home">
        <div className="feedContainer">
            <div className="MakeTweet">
                <img className="profile-thumbnail" />
                <input
                type="text"
                placeholder="¿Qué está pasando?"/>
                <button>Twittear</button>
            </div>
            <div className="tweets">
                {tweet && tweet.map(tweet => <Tweets {...tweet} key={tweet.id}/> )}
            </div>
        </div>
        </div>
    );
}