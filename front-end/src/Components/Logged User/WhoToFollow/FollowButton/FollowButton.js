import React from 'react';
import "./FollowButton.css"
import {useParams} from "react-router-dom";

export const FollowButton = () => {

    const [following, setFollowing] = React.useState(false);

    const {id} = useParams();


    React.useEffect( () =>
        fetch()

    )

    return (
        <button className="followButton">Seguir</button>
    )
}