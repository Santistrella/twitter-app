import React, { useCallback, useEffect, useState } from "react";
import "./Home.css";
import { TweetCreator } from "../Tweet/TweetCreator/TweetCreator";
import { Tweets } from "../Tweet/Tweets/Tweets";
import {useAuth} from "../../Context/authentication.context";

export const Home = () => {
  const [tweet, setTweet] = useState(undefined);
  const { auth } = useAuth();

  const refresh = useCallback(() => {
    fetch(`http://localhost/api/tweet/`, {
      mode: "cors",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${auth.token}`,
      },})
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
