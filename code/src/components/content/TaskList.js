/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import styled from 'styled-components/macro';
import './TaskList.css';
import { textColor } from 'components/GlobalStyles';
import bin from '../../Assets/trash.svg';

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.tasks);
  const dispatch = useDispatch();

  // <p key={task.id}>{task.text}</p>

  return (
    <TaskListStyle>
      {taskList.map((task) => {
        return (
          <TaskForm key={task.id}>
            <input
              id={task.id}
              onChange={() => dispatch(tasks.actions.toggleComplete(task.id))}
              type="checkbox"
              checked={task.isComplete}
              name="tasks"
            />
            <label htmlFor={task.id}>{task.text}</label>
            <TrashBin
              type="button"
              onClick={() => dispatch(tasks.actions.deleteTask(task.id))}
            >
              <img src={bin} alt="trashbin" />
            </TrashBin>
          </TaskForm>
        );
      })}
    </TaskListStyle>
  );
};

export default TaskList;

const TaskListStyle = styled.form`
  width: 80%;
  height: 60%;
  display: flex;
  border: 1px solid ${textColor};
  flex-direction: column;
  font-size: 20px;
  padding: 20px 10px;
  gap: 40px;
  overflow-y: scroll;
`;

const TaskForm = styled.div`
  /* display: flex; */
  display: grid;
  grid-template-columns: 0fr 6fr 1fr;
  align-items: center;
  justify-content: center;
  align-items: flex-start;
`;

const TrashBin = styled.button`
  height: 24px;
  width: fit-content;
  justify-self: center;
  background: none;
  /* outline: none; */
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;

  img {
    height: 24px;
    width: 24px;
  }
`;
