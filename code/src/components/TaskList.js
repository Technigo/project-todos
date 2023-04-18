import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import tasks from '../reducers/tasks';

const TaskForm = styled.form`
  border: solid black;
`;

const Content = styled.div`
  background-color: var(--background);
  border: 5px dotted black;
  min-width: 334px;
  max-width: 500px;
  margin: 0 auto;
  padding: 10px;

  @media (min-width: 992px) {
    padding: 50px;
  }
`;

const DeleteAllButton = styled.button`
  border: 1px solid black;
  background-color: #f25050;
  color: black;
  width: 100px;
  padding: 8px;
  font-size: 15px;
  border-radius: 4px;
  transition-duration: 0.4s;
  box-shadow: none;
  margin: 10px;
  font-family: var(--button-font);

  &:hover {
    background-color: white;
    color: black;
    transition-duration: 0.4s;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const onDeleteTask = () => {
    dispatch(tasks.actions.deleteTask(task.id));
  };

  return (
    <li key={task.id}>
      <input
        type="checkbox"
        checked={task.isComplete}
        onChange={() => dispatch(tasks.actions.toggleComplete(task.id))} />
      <span>{task.text}</span>
      <button type="button" onClick={onDeleteTask}>Delete</button>
    </li>
  );
};

export const TaskList = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const listWithTasks = useSelector((store) => store.tasks.items);

  const onAddTask = () => {
    dispatch(tasks.actions.addTask({ text: input }));
    setInput('');
  };

  const onDeleteAll = () => {
    dispatch(tasks.actions.deleteAll());
  };

  return (
    <Content>
      <TaskForm onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add task" />
        <button type="submit" onClick={onAddTask}>
          Add
        </button>
      </TaskForm>

      <div className="container">
        <h2>You have {listWithTasks.length} tasks left for today.</h2>

        <DeleteAllButton
          disabled={listWithTasks.length < 1}
          onClick={onDeleteAll}>
          Delete all
        </DeleteAllButton>

        <ul>
          {listWithTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      </div>
    </Content>
  );
};
