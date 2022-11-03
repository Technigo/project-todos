import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import tasks from 'reducers/todos/taskSlice';
import moment from 'moment';

// add label?
const Task = ({ taskData }) => {
  const dispatch = useDispatch();
  const onIsCompletedToggle = () => { dispatch(tasks.actions.toggleItem(taskData.id)); };
  const onRemoveTask = () => { dispatch(tasks.actions.removeTask(taskData.id)); };
  return (
    <TaskWrapper>
      <div className="task-row">
        <input
          className="inputfield"
          type="checkbox"
          id={taskData.id}
          name="todo"
          checked={taskData.isCompleted}
          onChange={() => onIsCompletedToggle(taskData.id)} />
        <p className="task-text">{taskData.text}</p>
        <button className="remove-button" type="button" onClick={() => onRemoveTask(taskData.id)}>X</button>
      </div>
      <Date>Created {moment(taskData.date).format('ddd, MMM Do YYYY @ hh:mm a')}</Date>
    </TaskWrapper>
  );
};
export default Task;

const TaskWrapper = styled.div`
background-color: red;
margin: 10px 0;
padding: 0 10px;
display: flex;
flex-direction: column;


.task-row {
  padding-top: 25px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  border: solid 2px green;
}

.inputfield{
  // checkbox
}

.task-text{
  font-size: 16px;
  padding: 0 20px;
}

.remove-button{
  font-size: 16px;
  padding: 0 20px;
  margin-left: auto;
}
`

const Date = styled.div`
font-size: 10px;
align-items: flex-end;
margin-left: auto;


// font-family:
`

/** (moment().format('MMMM Do YYYY, h:mm:ss a'))}/ */

// @media (min-width: 667px) and (max-width: 1024px) {
// }
// @media (min-width: 1025px) {
// }
// `