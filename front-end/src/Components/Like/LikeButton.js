import React, { useEffect, useState } from "react";
import "./LikeButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {useAuth} from "../../Context/authentication.context";
import {fetchResource} from "../../Api/Wrapper";

export const LikeButton = ( props ) => {
    const {changeLikes, numLikes, changeLiked} = props;
    const { auth } = useAuth();
    const initialState = {
        tweet_id: props.tweetId,
    };

    const [isLiked, setIsLiked] = useState(props.isLiked);


    const onHandleChange = () => {
        if (isLiked === false) {
            sendLike();
        } else {
            deleteLike();
        }
    };

    const deleteLike = () => {
        const token = localStorage.getItem("user");
        fetchResource('like/tweet', {method: "delete"}, props.tweetId)
        .then((res) => {
            changeLikes(numLikes-1);
            setIsLiked(false);
        });
    };

    const sendLike = () => {
        const token = localStorage.getItem("user");
        fetchResource('like', {method: 'post', body: {'tweet_id' :props.tweetId}})
        .then((res) => {
            changeLikes(numLikes+1);
            setIsLiked(true);
        });
    };

    return (
        <div>
            {/* <button id="LikeBtn" onClick={() => sendLike()}> */}
            <button id="LikeBtn" onClick={ onHandleChange }>
                <FontAwesomeIcon icon={faHeart} color={isLiked ? "red" : undefined} />
            </button>
        </div>
    );
};