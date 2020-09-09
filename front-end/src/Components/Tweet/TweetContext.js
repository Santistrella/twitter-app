import React, { createContext, useCallback, useContext, useState } from "react";
import {useAuth} from "../../Context/authentication.context";

const TweetContext = createContext();

const TweetContextProvider = (props) => {
  const [tweets, setTweets] = useState(undefined);
  const { auth } = useAuth();
  const refresh = useCallback(() => {
    fetch("http://localhost/api/tweet",{
      mode: "cors",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${auth.token}`,
      },
    })
      .then((response) => response.json())
      .then((res) => {
        setTweets(res);
      });
  }, []);
  return (
    <TweetContext.Provider value={{ tweets, refresh }}>
      {props.children}
    </TweetContext.Provider>
  );
};
export const tweetContextWrapper = (Component) => (props) => (
  <TweetContextProvider>
    <Component {...props} />
  </TweetContextProvider>
);

export const useTweetContext = () => {
  const context = useContext(TweetContext);
  if (context === undefined) {
    return {};
  }
  return context;
};
