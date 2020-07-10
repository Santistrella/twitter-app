import React, { useEffect, useState } from "react";
import "./Profile.css";
import covertweet from "./covertweet.jpg";
import profilepic from "./profilepic.jpg";
import { Tweets } from "../Tweet/Tweets/Tweets";
import { ActivityTab } from "../Navigations/ActivityTab/ActivityTab";
import AuthService from "../../Services/auth.service";
import { useParams } from "react-router-dom";
import authHeader from "../../Api/authHeader";

export const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  const [userData, setUserData] = useState(undefined);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost/api/user/${id}`, {
      method: "get",
      mode: "cors",
      headers: {
        "content-type": "application/json",
        headers: authHeader(),
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

  console.log(userData);

  const [tweet, setTweet] = useState();
  useEffect(() => {
    fetch("http://localhost/api/tweet")
      .then((response) => response.json())
      .then((usersFromResponse) => {
        setTweet(usersFromResponse);
      });
  }, []);

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
            <button className="loginButton">Editar Perfil</button>
          </div>
          <div className="profileInfoContainer">
            <h2>{userData.name}</h2>
            <br />
            <h3>{userData.email}</h3>
            <br />
            <p>{userData.description}</p>
            <div className="followCounter">
              <p>
                <strong>0</strong> Siguiendo{" "}
              </p>
              <br />
              <p>
                <strong> 0</strong> Seguidores
              </p>
            </div>
          </div>
          <ActivityTab />
          {tweet && tweet.map((tweet) => <Tweets {...tweet} key={tweet.id} />)}
        </div>
      </div>
    </div>
  );
};
