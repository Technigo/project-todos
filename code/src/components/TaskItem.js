import React from "react";
import { useDispatch } from "react-redux";
import { tasks } from "reducers/tasks";
import rubbish from "assets/rubbish.png";
import "components/taskItem.css";

export const TaskItem = props => {
  const dispatch = useDispatch();

  const handleCheckboxClick = () => {
    dispatch(tasks.actions.toggleIsDone(props.item.id));
  };

  const handleRemoveButtonClick = () => {
    dispatch(tasks.actions.removeTask(props.item.id));
  };

  return (
    <li>
      <div className="task-list">
        <label ClassName="checkbox-label">
          <input
            className="checkbox"
            type="checkbox"
            checked={props.item.isDone}
            onChange={handleCheckboxClick}
          />
          <span className="fake-checkbox"></span>
        </label>
        <p>{props.item.name}</p>
        <button
          className="remove-button"
          type="button"
          onClick={handleRemoveButtonClick}
        >
          <img src={rubbish} alt="Bin" className="delete-icon" />
        </button>
      </div>
    </li>
  );
};
