import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import tasks from 'reducers/todos/taskSlice';

// add label?
const Task = ({ taskData }) => {
  const dispatch = useDispatch();
  const onIsCompletedToggle = () => { dispatch(tasks.actions.toggleItem(taskData.id)); };
  const onremoveTask = () => { dispatch(tasks.actions.removeTask(taskData.id)); };
  return (
    <TaskWrapper>
      <input
        type="checkbox"
        id={taskData.id}
        name="todo"
        checked={taskData.isCompleted}
        onChange={() => onIsCompletedToggle(taskData.id)} /><h2>{taskData.text}</h2>
      {/* <Date>{date}</Date> */}
      <button type="button" onClick={() => onremoveTask(taskData.id)}>X</button>
      {/* <button type="button" onClick={() => showNewTask()}>+</button> */}
    </TaskWrapper>
  );
};
export default Task;

const TaskWrapper = styled.div`
border: solid 2px black`

// const Date = styled.div`
// border: solid 2px black`

