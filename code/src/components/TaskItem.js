import React from "react";
import { useDispatch } from "react-redux";
import { tasks } from "reducers/tasks";

export const TaskItem = props => {
  const dispatch = useDispatch();

  const handleCheckboxClick = () => {
    dispatch(tasks.actions.toggleIsDone(props.item.id));
  };

  const handleRemoveButtonClick = () => {
    dispatch(tasks.actions.removeItem(props.item.id));
  };

  return (
    <li>
      <button
        className="remove-button"
        type="button"
        onClick={handleRemoveButtonClick}
      >
        ❌
      </button>

      {props.item.name}

      <label>
        <input
          type="checkbox"
          checked={props.item.isDone}
          onChange={handleCheckboxClick}
        />
      </label>
    </li>
  );
};
