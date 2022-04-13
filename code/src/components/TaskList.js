import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import tasks from "reducers/tasks";
import { devices } from "styles";

const TaskWrapper = styled.section`
  @media ${devices.tablet} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const TaskCard = styled.article`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  padding: 15px 10px 10px 15px;
  margin: 5px;
  background-color: rgba(255, 255, 255, 0.5);

  @media ${devices.tablet} {
    width: 70vw;
  }
`;
const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {background-color: rgba(255, 255, 255, 0.7)}
  &:active {
    background-color: rgba(255, 255, 255, 0.7)
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

`;

const TaskText = styled.h2`
  font-weight: 400;
  font-size: medium;
  margin: 10px 5px;

  @media ${devices.tablet} {
    font-size: large;
  }
`;

const StyledCheckBox = styled.input`
  cursor: pointer;
  appearance: none;
  background-color: #fff;
  /* color: #ffbcbc; */
  width: 2em;
  height: 2em;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;

  &::before {
    content: "";
    width: 1.3em;
    height: 1.3em;
    border-radius: 2px;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #ffbcbc;
  }
  &:checked::before {
    transform: scale(1);
  }
`;

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items);

  const dispatch = useDispatch();

  const onTaskToggle = (taskId) => {
    dispatch(tasks.actions.toggleTask(taskId));
  };

  const onTaskDelete = (index) => {
    dispatch(tasks.actions.deleteTask(index));
  };

  return (
    <TaskWrapper>
      {" "}
      {taskList.map((task, TaskIndex) => (
        <TaskCard key={task.id}>
          <StyledCheckBox
            type="checkbox"
            checked={task.isComplete}
            onChange={() => onTaskToggle(task.id)}
          />
          <label htmlFor="completed task"></label>
          <TaskText>{task.text}</TaskText>
          <DeleteButton onClick={() => onTaskDelete(TaskIndex)}>
            {" "}
            <span role="img" aria-label="delete">
              𝕏
            </span>
          </DeleteButton>
        </TaskCard>
      ))}
    </TaskWrapper>
  );
};
export default TaskList;
