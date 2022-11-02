import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import tasks from 'reducers/todos/taskSlice';
// import moment from 'moment';

// add label?
const Task = ({ taskData }) => {
  const dispatch = useDispatch();
  const onIsCompletedToggle = () => { dispatch(tasks.actions.toggleItem(taskData.id)); };
  const onRemoveTask = () => { dispatch(tasks.actions.removeTask(taskData.id)); };
  return (
    <TaskWrapper>
      <input
        type="checkbox"
        id={taskData.id}
        name="todo"
        checked={taskData.isCompleted}
        onChange={() => onIsCompletedToggle(taskData.id)} /><h2>{taskData.text}</h2>
      <button type="button" onClick={() => onRemoveTask(taskData.id)}>X</button>
      <Date>{taskData.date}</Date>
    </TaskWrapper>
  );
};
export default Task;

const TaskWrapper = styled.div`
border: solid 2px black`

const Date = styled.div`
border: solid 2px black`

/** (moment().format('MMMM Do YYYY, h:mm:ss a'))}/ */