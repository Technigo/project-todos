import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components/macro";
import tasks from "reducers/todo";

const TaskArea = styled.section`
  margin: 40px auto 5px;
  padding: 16px;
  min-height: 370px;
  max-width: 300px;
  background-color: #f1f5f8;
  background-size: 40px 40px;
  border-radius: 20px;
  box-shadow: 4px 3px 7px 2px #00000040;
`;
const TaskItem = styled.article`
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 5px;
  position: relative;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 20px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

// useSelector  reach for the data.
// to reach the whole store or backpack: ((store) => store...

const TodoList = () => {
  const taskList = useSelector((state) => state.task.items);

  const dispatch = useDispatch();

  const onTaskToggle = (Id) => {
    dispatch(tasks.actions.toggleItem(Id));
  };

  const onTaskdelete = (index) => {
    dispatch(tasks.actions.deleteItem(index));
  };
  return (
    <TaskArea>
      <h1>My todo list</h1>
      {taskList.map((taskItem, taskindex) => (
        <TaskItem key={taskItem.id}>
          <h2>{taskItem.text}</h2>
          <label>
            Is completed: &nbsp;
            <input
              type="checkbox"
              checked={taskItem.completed}
              onChange={() => onTaskToggle(taskItem.id)}
            />
          </label>
          <DeleteButton onClick={() => onTaskdelete(taskindex)}>
            <span role="img" aria-label="delete">
              ✖
            </span>
          </DeleteButton>
        </TaskItem>
      ))}
    </TaskArea>
  );
};

export default TodoList;
