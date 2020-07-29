import React, { useEffect, useState } from "react";
import "./LikeButton.css";

export const ShowLikes = (props) => {
    const {tweetId} = props;

    const [likes, setLikes] = useState(undefined);

    useEffect(() => {
        fetch(`http://localhost/api/like/${tweetId}`)
            .then((response) => response.json())
            .then(res => {
                setLikes(res.count);
            });
    }, [tweetId]);


    return (
        <div className="counter">
            {likes}
        </div>
    );
};