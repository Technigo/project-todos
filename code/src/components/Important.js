import React from "react";
import { useDispatch } from "react-redux";
import { tasks } from "reducers/tasks";

export const Important = ({ ifImportant, id }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(tasks.actions.toggleImportant({ id }));
  };
  return (
    <button type="button" onClick={handleClick}>
      {ifImportant === true && <ion-icon name="star"></ion-icon>}
      {ifImportant === false && <ion-icon name="star-outline"></ion-icon>}
    </button>
  );
};
