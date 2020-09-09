import React, { useEffect, useState } from "react";
import "./LikeButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {useAuth} from "../../Context/authentication.context";

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
        fetch(`http://localhost/api/like/tweet/${props.tweetId}`, {
            method: "delete",
            mode: "cors",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${auth.token}`,
            },
        }).then((res) => {
            if (res.ok) {
                // refresh(true);
                changeLikes(numLikes-1);
                setIsLiked(false);
                return res.json();
            }
            throw res;
        });
    };

    const sendLike = () => {
        const token = localStorage.getItem("user");
        fetch("http://localhost/api/like", {
            method: "post",
            mode: "cors",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${auth.token}`,
            },
            body: JSON.stringify({tweet_id : props.tweetId}),
        }).then((res) => {
            if (res.ok) {
                changeLikes(numLikes+1);
                setIsLiked(true);
                return res.json();
            }
            throw res;
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