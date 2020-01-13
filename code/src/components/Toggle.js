import React from "react";
import { useDispatch } from "react-redux";
import { tasks } from "reducers/tasks";

export const Toggle = ({ ifCompleted, id }) => {
  const dispatch = useDispatch();
  // let completed = useSelector(state =>
  //   state.tasks.taskData.map(todo => todo.complete)
  // );
  // console.log(completed);

  const handleClick = () => {
    dispatch(tasks.actions.toggle({ id }));
  };
  return (
    <button type="button" onClick={handleClick}>
      {ifCompleted === true && <ion-icon name="checkmark-circle"></ion-icon>}
      {ifCompleted === false && <ion-icon name="radio-button-off"></ion-icon>}
    </button>
  );
};
