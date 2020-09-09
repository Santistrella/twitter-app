import React, { createContext, useCallback, useContext, useState } from "react";

const TweetContext = createContext();

const TweetContextProvider = (props) => {
  const [tweets, setTweets] = useState(undefined);
  const refresh = useCallback(() => {
    fetch("http://localhost/api/tweet")
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
