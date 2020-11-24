import React from "react";
import styled from "styled-components";
import { todos } from "reducers/todos";
import { useDispatch } from "react-redux";

const TaskContainer = styled.li`
  align-items: flex-start;
  padding: 8px;
  margin: 8px;
  font-size: 32px;
  color: white;
  background: pink;
`;

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  // const handleCheckboxClick = () {
  //   dispatch(todos.actions.)
  // }

  return (
    <TaskContainer>
      <label>
        <input
          type="checkbox"
          role="checkbox"
          checked={task.complete}
          onChange={() => {
            dispatch(todos.actions.doneTask(task.id));
          }}
        />
        {task.text}
      </label>
      <button
        type="button"
        onClick={() => {
          dispatch(todos.actions.removeTask(task.id));
        }}
      >
        -
      </button>
    </TaskContainer>
  );
};
