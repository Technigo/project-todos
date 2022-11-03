/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import tasks from 'reducers/tasks';
import cat from 'reducers/cat';
import styled from 'styled-components/macro';
import './TaskList.css';
import { textColor } from 'components/GlobalStyles';
// import bin from '../../Assets/trash.svg';
import TaskFormCheckbox from './TaskFormCheckbox';
import Trashbin from './Trashbin';

const TaskList = ({ bottomRef }) => {
  const taskList = useSelector((store) => store.tasks.tasks);
  // const previousCat = useSelector((store) => store.cat.previousCat);
  // const catOfTheHour = useSelector((store) => store.cat.catOfTheHour);
  const dispatch = useDispatch();
  // console.log('previousCat TaskList:', previousCat);
  // console.log('catOfTheHour TaskList:', catOfTheHour);
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

  // useEffect(() => {
  //   // Makes the list scroll to the last task
  //   bottomRef.current.scrollIntoView({ behaviour: 'smooth' });
  // }, [taskList]);

  // console.log(taskList.length, 'previousCat in TaskList:', previousCat);

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
      <div ref={bottomRef} />
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
  /* display: flex; */
  display: grid;
  grid-template-columns: 6fr 1fr;
  align-items: center;
  justify-content: center;
  align-items: flex-start;
`;
