import React from "react";
import { useDispatch } from "react-redux";
import { tasks } from "reducers/tasks";

export const DeleteOne = ({ id }) => {
  const dispatch = useDispatch();
  // let completed = useSelector(state =>
  //   state.tasks.taskData.map(todo => todo.complete)
  // );
  // console.log(completed);

  const handleClick = () => {
    dispatch(tasks.actions.deleteOne({ id }));
  };
  return (
    <button type="button" onClick={handleClick}>
      <ion-icon name="close-circle"></ion-icon>
    </button>
  );
};
