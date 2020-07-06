import React, { useEffect, useState } from "react";
import "./Profile.css";
import covertweet from "./covertweet.jpg";
import profilepic from "./profilepic.jpg";
import { Tweets } from "../Tweet/Tweets/Tweets";
import { ActivityTab } from "../Navigations/ActivityTab/ActivityTab";

export const Profile = () => {
  const [tweet, setTweet] = useState();
  useEffect(() => {
    fetch("http://localhost/api/tweet")
      .then((response) => response.json())
      .then((usersFromResponse) => {
        setTweet(usersFromResponse);
      });
  }, []);

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
            <h2>Example Profile</h2>
            <br />
            <h3>@Example.Profile</h3>
            <br />
            <p>
              #Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              nec congue nisl.
            </p>
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
