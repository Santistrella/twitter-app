import React, { createContext } from "react";

const TweetsContext = createContext();

const TweetsData = () => {
  return <TweetsContext.Consumer>{}</TweetsContext.Consumer>;
};
