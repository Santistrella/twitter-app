import React, { useEffect, useState } from "react";
import "./Home.css";
import { TweetCreator } from "../Tweet/TweetCreator/TweetCreator";
import { Tweets } from "../Tweet/Tweets/Tweets";
import { useParams } from "react-router-dom";

export const Home = () => {
  const [tweet, setTweet] = useState();

  useEffect(() => {
    fetch("http://localhost/api/tweet")
      .then((response) => response.json())
      .then((usersFromResponse) => {
        setTweet(usersFromResponse);
      });
  }, []);
  console.log(tweet);

  return (
    <div className="Home">
      <div className="feedContainer">
        <TweetCreator />
        <div className="tweets">
          {tweet && tweet.map((tweet) => <Tweets {...tweet} key={tweet.id} />)}
        </div>
      </div>
    </div>
  );
};
