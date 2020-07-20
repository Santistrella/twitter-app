import React, { useEffect, useState } from "react";
import "./Tweets.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRetweet,
  faCommentAlt,
  faHeart,
  faShareSquare,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import profilepic from "./profilepic.jpg";

export const Tweets = (tweet) => {
  const [userData, setUserData] = useState(undefined);
  const token = localStorage.getItem("user");
  const id = tweet.user_id;

  useEffect(() => {
    fetch(`http://localhost/api/user/${id}`, {
      method: "get",
      mode: "cors",
      headers: {
        "content-type": "application/json",
        headers: `Bearer ${token}`,
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

  const DeleteTweet = () => {
    const token = localStorage.getItem("user");
    fetch(`http://localhost/api/tweet/${tweet.id}`, {
      method: "delete",
      mode: "cors",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw res;
    });
  };

  return (
    <div className="tweetContainer" key={tweet.id}>
      <header>
        <img src={profilepic} className="profile-thumbnail" />
        <div className="profile-name">
          <h3>{userData.name}</h3>
          <p>{userData.email}</p>
        </div>
      </header>
      <div id="inner">
        <p>{tweet.tweet}</p>
      </div>
      <footer>
        <div className="cta">
          <button id="commentBtn">
            <FontAwesomeIcon icon={faCommentAlt} />
          </button>
          <button id="RtwtBtn">
            <FontAwesomeIcon icon={faRetweet} />
          </button>
          <button id="LikeBtn">
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <button id="SendBtn">
            <FontAwesomeIcon icon={faShareSquare} />
          </button>
          <button
            className="LikeBtn"
            id="deleteBtn"
            onClick={() => {
              DeleteTweet(tweet.id);
            }}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </div>
      </footer>
    </div>
  );
};
