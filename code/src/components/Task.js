import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import tasks from 'reducers/todos/taskSlice';
import moment from 'moment';

const Task = ({ taskData }) => {
  const dispatch = useDispatch();
  const onIsCompletedToggle = () => { dispatch(tasks.actions.toggleItem(taskData.id)); };
  const onRemoveTask = () => { dispatch(tasks.actions.removeTask(taskData.id)); };
  return (
    <TaskWrapper>
      <div className="task-row">
        <input
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
background-color: var(--main-color);
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
}

input{
border: solid 2px red;
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
// @media (min-width: 667px) and (max-width: 1024px) {
// }
// @media (min-width: 1025px) {
// }
// `

// <CustomCheck
// role="button"
// onClick={() => onIsCompletedToggle(taskData.id)}
// complete={thisTask.complete}
// onKeyDown={(e) => e.key === "Enter" && toggleComplete()}
// aria-label={
//   thisTask.complete
//     ? `task complete. press enter to toggle.`
//     : `task incomplete. press enter to toggle.`
// }
// >
// {thisTask.complete ? "" : <IncompleteCheckIcon src={checkblack} />}
// {thisTask.complete ? <CheckIcon src={checkblack} /> : ""}
// </CustomCheck>

/*  */