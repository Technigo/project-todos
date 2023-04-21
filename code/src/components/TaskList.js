import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks'
import styled from 'styled-components';

export const TaskList = () => {
  // FUNCTIONALITY
  const taskList = useSelector((store) => store.tasks.items)
  const dispatch = useDispatch()

  const onTaskToggle = (taskId) => {
    dispatch(tasks.actions.toggleTask({ id: taskId }));
  }

  const onRemoveTask = (taskId) => {
    dispatch(tasks.actions.deleteTask({ taskId }));
  }

  // STYLES
  const TaskListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  `
  const SingleTaskWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #E6DBBC;
  padding: 0.5rem;
  border-radius: 1.8rem;
  width: 20rem;
  word-wrap: break-word;
  margin-bottom: 15px;
   
  li {
    display: flex;
    flex-direction: column;
    text-align: left !important;
    gap: 0.5rem;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 1.5rem;
    color: #444444;
  
    span {
      font-size: 0.8rem;
      color: #777;
    }
  }
  
  @media (min-width: 668px) {
  width: 32rem;
  font-size: 1rem;
  }
  
  @media (min-width: 1024px) {
  width: 32rem;
  font-size: 1.5rem;
  }
  `;
  return (
    <TaskListWrapper>
      <ul>
        {taskList.map((singleTask) => {
          const deadlineDate = singleTask.deadlineDate ? new Date(singleTask.deadlineDate).toLocaleDateString('sv-SE') : '';
          return (
            <SingleTaskWrapper key={singleTask.id}>
              <input
                type="checkbox"
                checked={singleTask.isDone}
                onChange={() => onTaskToggle(singleTask.id)} />
              <li>
                {singleTask.text}
                {singleTask.time}
                {deadlineDate && (
                  <span>
                    Deadline: {deadlineDate}
                  </span>
                )}
              </li>
              <button type="button" onClick={() => onRemoveTask(singleTask.id)}>Delete</button>
            </SingleTaskWrapper>

          )
        })}
      </ul>
    </TaskListWrapper>
  )
}
