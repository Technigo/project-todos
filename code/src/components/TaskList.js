import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import tasks from 'reducers/tasks';

const TaskList = () => {
  const items = useSelector((store) => store.tasks.items);

  const dispatch = useDispatch();

  const onToggleTasks = (id) => {
    dispatch(tasks.actions.toggleTasks(id));
  };

  const onDeleteTodo = (id) => {
    dispatch(tasks.actions.deleteTodo(id));
  };

  const TasksContainer = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 80%;
    height: auto;
    border: 2px solid green;
    align-items: center;
  `;
  const TaskListItem = styled.div`
    border: 2px solid black;
    display: flex;
    flex-direction: row;
    align-items: center;
  `;

  const TaskText = styled.p`
    font-weight: bold;
    color: red;
    text-transform: capitalize;
  `;
  const TaskCheckbox = styled.input`
    height: 25px;
    width: 25px;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    border: 1px solid #34495e;
    border-radius: 4px;
    outline: none;
    transition-duration: 0.3s;
    background-color: #41b883;
    cursor: pointer;
    &:checked {
      border: 1px solid #41b883;
      background-color: #34495e;
      content: '\\2713';

      &:checked + :before {
        content: \\2713;
        display: block;
        text-align: center;
        color: #41b883;
        position: absolute;
        left: 0.7rem;
        top: 0.2rem;
      }
    }
  `;
  const DeleteButton = styled.button`
    border-radius: 10px;
  `;

  return (
    <>
      <TasksContainer>
        {items.map((item) => (
          <TaskListItem key={item.id}>
            <TaskText>{item.text}</TaskText>
            <TaskCheckbox
              type="checkbox"
              checked={item.isComplete}
              onChange={() => onToggleTasks(item.id)}
            />
            <DeleteButton onClick={() => onDeleteTodo(item.id)}>
              Delete
            </DeleteButton>
          </TaskListItem>
        ))}
      </TasksContainer>
    </>
  );
};

export default TaskList;
