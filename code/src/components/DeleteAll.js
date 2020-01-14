import React from "react";
import { useDispatch } from "react-redux";
import { tasks } from "reducers/tasks";

export const DeleteAll = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(tasks.actions.deleteAll());
  };
  return (
    <button type="button" onClick={handleClick}>
      <ion-icon name="close-circle"></ion-icon>
    </button>
  );
};
