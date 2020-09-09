import React, {useEffect, useState} from "react";
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
import { useAuth } from "../../../Context/authentication.context";
import { LikeButton } from "../../Like/LikeButton";
import { ShowLikes } from "../../Like/ShowLikes";

export const Tweets = ({ tweet, refresh }) => {
  const id = tweet.user_id;
  const { auth } = useAuth();

  const DeleteTweet = () => {
    fetch(`http://localhost/api/tweet/${tweet.id}`, {
      method: "delete",
      mode: "cors",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${auth.token}`,
      },
    }).then((res) => {
      if (res.ok) {
        refresh(true);
        return res.json();
      }
      throw res;
    });
  };

  const buttonCallback = React.useCallback(() => {
    DeleteTweet(tweet.id);
  }, [tweet.id]);

  return (
    <div className="tweetContainer" key={tweet.id}>
      <header>
        <img src={profilepic} className="profile-thumbnail" />
        <div className="profile-name">
          <h3>{tweet.user.name}</h3>
          <p>{tweet.user.email}</p>
        </div>
      </header>
      <div id="inner">
        <p>{tweet.tweet}</p>
      </div>
      <footer>
        <div className="iconsContainer">
          <button id="commentBtn">
            <FontAwesomeIcon icon={faCommentAlt} />
          </button>
          <button id="RtwtBtn">
            <FontAwesomeIcon icon={faRetweet} />
          </button>
          <LikeButton tweetId={tweet.id} isLiked={tweet.isLiked}/>
          <ShowLikes tweetId={tweet.id} numLikes={tweet.numLikes}/>
          <button id="SendBtn">
            <FontAwesomeIcon icon={faShareSquare} />
          </button>
          <button className="LikeBtn" id="deleteBtn" onClick={buttonCallback}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </div>
      </footer>
    </div>
  );
};
