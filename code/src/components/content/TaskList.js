/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cat from 'reducers/cat';
import styled from 'styled-components/macro';
import './TaskList.css';
import { textColor } from 'components/GlobalStyles';
import TaskFormCheckbox from './TaskFormCheckbox';
import Trashbin from './Trashbin';

const TaskList = ({ bottomRef }) => {
  const taskList = useSelector((store) => store.tasks.tasks);
  const dispatch = useDispatch();
  const catMood = (amountOfTasks) => {
    if (amountOfTasks === 0) {
      dispatch(cat.actions.changeCatAndPrevious('angel'));
    } else if (amountOfTasks > 0 && amountOfTasks <= 4) {
      dispatch(cat.actions.changeCatAndPrevious('stressed'));
    } else if (amountOfTasks > 4 && amountOfTasks <= 9) {
      dispatch(cat.actions.changeCatAndPrevious('dizzy'));
    } else if (amountOfTasks > 9) {
      dispatch(cat.actions.changeCatAndPrevious('dead'));
    }
  };
  useEffect(() => {
    catMood(taskList.length);
  }, [taskList.length]);

  return (
    <TaskListStyle scrollTop="1000">
      {taskList.map((task) => {
        return (
          <TaskForm key={task.id}>
            <TaskFormCheckbox task={task} />
            <label htmlFor={task.id}>{task.text}</label>
            <Trashbin task={task} />
          </TaskForm>
        );
      })}
      <BottomRefDiv ref={bottomRef} />
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
  padding: 20px;
  gap: 40px;
  overflow-y: scroll;
`;

const TaskForm = styled.div`
  display: grid;
  grid-template-columns: 6fr 1fr;
  align-items: center;
  justify-content: center;
  align-items: flex-start;
`;

const BottomRefDiv = styled.div`
  height: 50px;
  min-height: 50px;
`;
