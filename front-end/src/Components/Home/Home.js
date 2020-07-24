import React, { useCallback, useEffect, useState } from "react";
import "./Home.css";
import { TweetCreator } from "../Tweet/TweetCreator/TweetCreator";
import { Tweets } from "../Tweet/Tweets/Tweets";

export const Home = () => {
  const [tweet, setTweet] = useState(undefined);

  const refresh = useCallback(() => {
    fetch("http://localhost/api/tweet")
      .then((response) => response.json())
      .then((usersFromResponse) => {
        setTweet(usersFromResponse);
      });
  }, []);
  console.log(tweet);
  useEffect(refresh, []);
  return (
    <div className="Home">
      <div className="feedContainer">
        <TweetCreator refresh={refresh} />
        <div className="tweets">
          {tweet &&
            tweet.map((tweet) => (
              <Tweets tweet={tweet} key={tweet.id} refresh={refresh} />
            ))}
        </div>
      </div>
    </div>
  );
};
