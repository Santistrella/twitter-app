import React, { useEffect, useState } from "react";
import "./LikeButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";

export const LikeButton = () => {
    const [like, setLike] = React.useState(0);

    const addLike = () => {
        if (like < 1) {
            setLike(like+1);
        } else {
            setLike(like-1);
        }
    }

    return (
        /* <button id="LikeBtn" onClick={() => {setLike(like+1)}}> */
        <button id="LikeBtn" onClick={addLike}>
            <FontAwesomeIcon icon={faHeart} />

            {like}
        </button>
    );
};