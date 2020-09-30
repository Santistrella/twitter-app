import React, { useState } from "react";
import "./TweetCreator.css";
import { useTweetContext } from "../TweetContext";

export const TweetCreator = (props) => {
  const initialState = {
    id: "",
    tweet: "",
    media_url: "",
  };
  const [data, setData] = useState({
    ...initialState,
    parentId: props.parentId,
  });
  const { refresh } = useTweetContext();
  const { onSubmit } = props;

  const handleFormSubmit = () => {
    const token = localStorage.getItem("user");
    fetch("http://localhost/api/tweet", {
      method: "post",
      mode: "cors",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((res) => {
        if (onSubmit !== undefined) {
          onSubmit();
        }
        refresh(true);
        setData(initialState);
      });
  };

  const handleChange = (key, newValue) => {
    setData({ ...data, [key]: newValue });
  };

  return (
    <div className="MakeTweet">
      <input
        id="tweet"
        type="text"
        onChange={(e) => handleChange("tweet", e.target.value)}
        placeholder="¿Qué está pasando?"
        value={data.tweet}
      />
      <input
        id="media_url"
        type="text"
        onChange={(e) => handleChange("media_url", e.target.value)}
        placeholder="Media Url"
        value={data.media_url}
      />
      <button onClick={() => handleFormSubmit()}>Twittear</button>
    </div>
  );
};
