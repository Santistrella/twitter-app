import React, { useEffect, useState } from "react";
import "./Home.css";
import { TweetCreator } from "../Tweet/TweetCreator/TweetCreator";
import { Tweets } from "../Tweet/Tweets/Tweets";
import authHeader from "../../Api/authHeader";
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

  const [userData, setUserData] = useState(undefined);
  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost/api/user/", {
      method: "get",
      mode: "cors",
      headers: {
        "content-type": "application/json",
        headers: authHeader(),
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((resJson) => {
        setUserData(resJson);
      });
  }, [id]);

  console.log(userData);

  if (userData === undefined) {
    return <div />;
  }

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
