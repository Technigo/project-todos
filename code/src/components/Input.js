import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { tasks } from "reducers/tasks";

export const Input = ({ handleClick, handleonChange }) => {
  let userInput = useSelector(state => state.tasks.value);

  const dispatch = useDispatch();

  handleClick = () => {
    dispatch(
      tasks.actions.addTask({
        taskText: userInput
      })
    );
  };

  handleonChange = e => {
    userInput = e.target.value;
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Add task"
        onChange={handleonChange}
      ></input>
      <button type="button" onClick={handleClick}>
        Add task +
      </button>
    </form>
  );
};
