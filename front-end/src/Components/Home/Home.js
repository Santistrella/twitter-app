import React, {useEffect, useState} from 'react';
import './Home.css';
import {TweetCreator} from "../Tweet/TweetCreator/TweetCreator";
import {Tweets} from "../Tweet/Tweets/Tweets";





export const Home = (params) => {

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
            {params.logged && "Logged"}
            <div className="feedContainer">
            <TweetCreator />
            <div className="tweets">
                {tweet && tweet.map(tweet => <Tweets {...tweet} key={tweet.id}/> )}
            </div>
            </div>
        </div>
    );
}