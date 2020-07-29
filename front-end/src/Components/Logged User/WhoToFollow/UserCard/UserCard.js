import React, {useState} from 'react'
import "./UserCard.css"
import {FollowButton} from "../FollowButton/FollowButton";

export const UserCard = (props) => {

    const {
        user
    } = props;

    return (
    <div className="UserCard">
        <div>
            <img alt={user} src={user.picture} className="UserCardPicture"/>
        </div>
        <div>
            <div>{user.name}</div>
            <div>{user.email}</div>
        </div>
        <div>
            <button className="followButton">Seguir</button>
        </div>
    </div>
    )
}