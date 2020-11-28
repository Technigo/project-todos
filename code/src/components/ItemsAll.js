//This component features 'all items' that belong to a task. The text itself, as well as both the checked and X button.
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tasks } from "reducers/tasks";

import {Checkbox} from './styled/Checkbox'
import styled from 'styled-components'

export const ItemsAll = ({ taskIndex }) => {
  const dispatch = useDispatch();
  const task = useSelector((store) => store.tasks.list.tasks[taskIndex]);
  
//Function to add a task
  const handleCheckbox = () => {
    dispatch(
      tasks.actions.checkTodoTask({
        taskIndex: taskIndex,
        complete: !task.complete,
      })
    );
  };

  //Function to remove a task
  const handleRemove = () => {
    dispatch(
      tasks.actions.taskRemoved({
        taskIndex,
      })
    );
  };

return (
    <TaskList>
      <TaskChecked>
        <Checkbox checked={task.complete ? "checked" : ""} onChangeHandler={handleCheckbox} />
        <TaskText style={{textDecoration: task.complete ? "line-through" : ""}}>
          {task.text}
        </TaskText>
      </TaskChecked>
      <ButtonX type="button" onClick={handleRemove}>X</ButtonX>
    </TaskList>
  );
};

export const TaskList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 12px 5px;
  border-bottom: 1px solid #8ea0e1;
  background-color: #ffffe8;
`;

export const TaskChecked = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TaskText = styled.p`
  margin: 0 20px 2px 8px;
  font-size: 18px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const ButtonX = styled.button`
  background-color: #df92a3;
  border: #df92a3;
  color: white;
  padding: 4px 8px 4px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 150ms;
  &:hover {
    background-color: #8ea0e1;
  }
`;