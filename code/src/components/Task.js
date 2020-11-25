import React from "react";
import styled from "styled-components";
import { todos } from "reducers/todos";
import { useDispatch } from "react-redux";

const TaskContainer = styled.li`
  /* align-items: flex-start; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* margin: 8px; */
  /* padding: 10; */
  font-size: 32px;
  color: blue;
  background: pink;
  list-style: none;
`;

const TaskLabel = styled.label`
  display: flex;
  align-items: center;
  margin: 10px;
`;

const CheckBox = styled.input`
  margin-right: 20px;
`;

const RemoveTaskButton = styled.button`
  margin-right: 10px;
`;

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <TaskContainer>
      <TaskLabel>
        <CheckBox
          type="checkbox"
          role="checkbox"
          checked={task.complete}
          onChange={() => {
            dispatch(todos.actions.doneTask(task.id));
          }}
        />
        {task.text}
      </TaskLabel>
      <RemoveTaskButton
        type="button"
        onClick={() => {
          dispatch(todos.actions.removeTask(task.id));
        }}
      >
        -
      </RemoveTaskButton>
    </TaskContainer>
  );
};
