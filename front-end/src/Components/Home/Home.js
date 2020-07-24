import React, { useEffect, useState } from "react";
import "./Home.css";
import { TweetCreator } from "../Tweet/TweetCreator/TweetCreator";
import { Tweets } from "../Tweet/Tweets/Tweets";

export const Home = () => {
  const [tweet, setTweet] = useState(undefined);

  const [refreshTweets, setRefreshTweets] = useState(true);

  useEffect(() => {
    if (refreshTweets) {
      fetch("http://localhost/api/tweet")
        .then((response) => response.json())
        .then((usersFromResponse) => {
          setTweet(usersFromResponse);
          setRefreshTweets(false);
        });
    }
  }, [refreshTweets]);
  console.log(tweet);

  return (
    <div className="Home">
      <div className="feedContainer">
        <TweetCreator refresh={setRefreshTweets} />
        <div className="tweets">
          {tweet &&
            tweet.map((tweet) => (
              <Tweets {...tweet} key={tweet.id} refresh={setRefreshTweets} />
            ))}
        </div>
      </div>
    </div>
  );
};
