import React, { useEffect, useState } from "react";
import "./LikeButton.css";
import { Menu, MenuItem } from "@material-ui/core";
import ModalUserLike from "./ModalUserLike";
import AuthService from "../../Services/auth.service";
import {useParams} from "react-router-dom";


export const ShowLikes = (props) => {
    const currentUser = AuthService.getCurrentUser();

    const [openEditModal, setOpenEditModal] = useState(false);
    const [userData, setUserData] = useState(undefined);
    const { id } = useParams();

    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const token = localStorage.getItem("user");
    const {tweetId, numLikes} = props;


    return (
        <div className="counter">
            {numLikes}

            {/*

            <button id="CounterBtn" onClick={handleClick}>
                {likes}
            </button>

             */}

            {/*

            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem>Info Users</MenuItem>
                <MenuItem>{tweetId}</MenuItem>

            </Menu>

            */}
            {/*
            <button
                className="loginButton"
                onClick={() => setOpenEditModal(true)}
            >
                {numLikes}
            </button>
            {openEditModal && (
                <ModalUserLike
                    open={openEditModal}
                    handleClose={() => setOpenEditModal(false)}
                />
            )}

            */}

        </div>
    );
};