import React, { useEffect, useState } from "react";
import "./LikeButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";

export const LikeButton = () => {
    // POST TESTED
    const initialState = {
        id: "",
        user_id: "42",
        tweet_id: "29",
    };
    const [data, setData] = useState(initialState);
    const handleFormSubmit = () => {
        const token = localStorage.getItem("user");
        fetch("http://localhost/api/like", {
            method: "post",
            mode: "cors",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
            throw res;
        });
    };

    return (
        /* <button id="LikeBtn" onClick={() => {setLike(like+1)}}> */
        /* <button id="LikeBtn" onClick={addLike}> */
        <div>
            <button id="LikeBtn" onClick={() => handleFormSubmit()}>
                <FontAwesomeIcon icon={faHeart} />
            </button>
        </div>
    );
};