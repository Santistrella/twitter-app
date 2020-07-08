import React, {useEffect, useState} from 'react';
import './Home.css';
import {TweetCreator} from "../Tweet/TweetCreator/TweetCreator";
import {Tweets} from "../Tweet/Tweets/Tweets";





export const Home = (props) => {

    const [tweet, setTweet] = useState();
    useEffect(() => {
        fetch("http://localhost/api/tweet")
            .then(response => response.json())
            .then(usersFromResponse => {
                setTweet(usersFromResponse);
            });
    }, [])

    return (
        <div className="Home">
            <div className="feedContainer">
            <TweetCreator />
            <div className="tweets">
                {tweet && tweet.map(tweet => <Tweets {...tweet} key={tweet.id}/> )}
            </div>
            </div>
        </div>
    );
}