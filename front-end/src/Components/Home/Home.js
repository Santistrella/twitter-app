import React, { useCallback, useEffect, useState } from "react";
import "./Home.css";
import { TweetCreator } from "../Tweet/TweetCreator/TweetCreator";
import { Tweet } from "../Tweet/TweetsFeed/Tweet";
import { tweetContextWrapper, useTweetContext } from "../Tweet/TweetContext";

const Home = () => {
  const { tweets, refresh } = useTweetContext();
  useEffect(refresh, []);
  return (
    <div className="Home">
      <div className="feedContainer">
        <TweetCreator />
        <div className="tweets">
          {tweets &&
            tweets.map((tweet) => <Tweet tweet={tweet} key={tweet.id} />)}
        </div>
      </div>
    </div>
  );
};

export default Home;
