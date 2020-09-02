import React, { useEffect, useState } from "react";
import "./Profile.css";
import covertweet from "./covertweet.jpg";
import profilepic from "./profilepic.jpg";
import { ActivityTab } from "../Navigations/ActivityTab/ActivityTab";
import EditProfile from "./EditProfile/EditProfile";
import AuthService from "../../Services/auth.service";
import { useParams } from "react-router-dom";

export const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  const [openEditModal, setOpenEditModal] = useState(false);
  const [userData, setUserData] = useState(undefined);
  const { id } = useParams();
  const token = localStorage.getItem("user");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch(`http://localhost/api/user/${id}`, {
      method: "get",
      mode: "cors",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((resJson) => {
        setUserData(resJson);
      });
  }, [id]);

  if (userData === undefined) {
    return <div />;
  }

  return (
    <div className="ProfileSection">
      <div className="profileContainer">
        <div className="Profile">
          <div className="CoverPicContainer">
            <img alt="cover" src={covertweet} />
          </div>
          <div className="ProfilePicContainer">
            <img alt="profile" src={profilepic} className="profilepic" />
            <button
              className="loginButton"
              onClick={() => setOpenEditModal(true)}
            >
              Editar Perfil
            </button>
            {openEditModal && (
              <EditProfile
                open={openEditModal}
                handleClose={() => setOpenEditModal(false)}
              />
            )}
          </div>
          <div className="profileInfoContainer">
            <h2>
              {userData.name} {userData.surname}
            </h2>
            <br />
            <h3>{userData.email}</h3>
            <br />
            <p>{userData.description}</p>
            <div className="followCounter">
              <p>
                <strong>0</strong> Siguiendo
              </p>
              <br />
              <p>
                <strong>0</strong> Seguidores
              </p>
            </div>
          </div>
          <ActivityTab />
        </div>
      </div>
    </div>
  );
};
