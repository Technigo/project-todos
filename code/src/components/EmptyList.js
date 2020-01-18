import React from "react";
import { useSelector } from "react-redux";
import postIt from "assets/postIt.jpg";
import "components/emptyList.css";

export const EmptyList = () => {
  const list = useSelector(state => state.tasks.items);
  const emptyList = list.length === 0;

  return (
    <>
      {emptyList && (
        <div className="message">
          <img
            src={postIt}
            alt="An empty and sad list."
            className="post-it-image"
          />
          <h3 className="message-title">Add a task to get started!</h3>
        </div>
      )}
    </>
  );
};
