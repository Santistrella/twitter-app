import React, { useState } from "react";
import "./Tweet.css";
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
import { NavLink } from "react-router-dom";
import { useTweetContext } from "../TweetContext";
import { LikeButton } from "../../Like/LikeButton";
import { ShowLikes } from "../../Like/ShowLikes";
import { useModalContext } from "../CommentContext/ModalContext";
import { fetchResource } from "../../../Api/Wrapper";

export const Tweet = ({ tweet }) => {
  const { refresh } = useTweetContext();
  const token = localStorage.getItem("user");
  const id = tweet.user_id;
  const { auth } = useAuth();
  const { openModal } = useModalContext();

  const [numLikes, setNumLikes] = useState(tweet.numLikes);

  const DeleteTweet = () => {
    fetchResource("tweet", {
      method: "delete",
    },
        tweet.id)
    .then(() => {
      refresh(true);
    });
  };

  const buttonCallback = React.useCallback(() => {
    DeleteTweet(tweet.id);
  }, [tweet.id]);

  return (
    <div className="tweetContainer" key={tweet.id}>
      <header>
        <NavLink to={`/profile/${id}`}>
          <img src={profilepic} className="profile-thumbnail" />
        </NavLink>
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
          <button id="commentBtn" onClick={() => openModal(tweet.id)}>
            <FontAwesomeIcon icon={faCommentAlt} />
          </button>
          <button id="RtwtBtn">
            <FontAwesomeIcon icon={faRetweet} />
          </button>
          <LikeButton
            tweetId={tweet.id}
            isLiked={tweet.isLiked}
            changeLikes={setNumLikes}
            numLikes={numLikes}
          />
          <ShowLikes tweetId={tweet.id} numLikes={numLikes} />
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
