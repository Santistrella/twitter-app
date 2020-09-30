import React, { createContext, useCallback, useContext, useState } from "react";
import MakeCommentModal from "./MakeCommentModal";

const CommentTweetContext = createContext();

const CommentTweetContextProvider = (props) => {
  const [openCommentModal, setOpenCommentModal] = useState(false);
  const [parentId, setParentId] = useState("");
  const openModal = useCallback((tweetid) => {
    setOpenCommentModal(true);
    setParentId(tweetid);
  }, []);

  return (
    <CommentTweetContext.Provider value={{ openModal }}>
      {props.children}
      <MakeCommentModal
        openCommentModal={openCommentModal}
        setOpenCommentModal={setOpenCommentModal}
        parentId={parentId}
      />
    </CommentTweetContext.Provider>
  );
};
export const commentTweetContextWrapper = (Component) => (props) => (
  <CommentTweetContextProvider>
    <Component {...props} />
  </CommentTweetContextProvider>
);

export const useModalContext = () => {
  const context = useContext(CommentTweetContext);
  if (context === undefined) {
    return {};
  }
  return context;
};
