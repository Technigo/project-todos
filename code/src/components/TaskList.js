import React, { useEffect } from 'react';
import { tasks } from 'reducers/tasks';
import { useSelector, useDispatch } from 'react-redux';
import { format, isToday, isYesterday } from 'date-fns';
import styled from 'styled-components';

const StyledTaskListContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-content: center;
    flex-wrap: wrap;
    border: solid blue 3px;
`;

const StyledSingleTaskWrapper = styled.div`
    display: flex;
    border: solid purple 1px;
    margin: 20px 0;
    padding: 20px;
    border-radius: 25px 5px 25px 5px;
    -webkit-border-radius: 25px 5px 25px 5px;
    -moz-border-radius: 25px 5px 25px 5px;
    box-shadow: 0 4px 8px  rgba(188,23,214,0.2), 0 6px 20px  rgba(188,23,214,0.2);
`;

export const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items)
  const dispatch = useDispatch();

  useEffect(() => {
    const tasksFromLocalStorage = JSON.parse(localStorage.getItem('taskList'));
    if (tasksFromLocalStorage) {
      dispatch(tasks.actions.setUpStore(tasksFromLocalStorage))
    }
  }, [dispatch])

  const onDeleteAllTasks = () => {
    dispatch(tasks.actions.deleteAllTasks());
  }

  const onDeleteSingleTaskBtnClick = (id) => {
    dispatch(tasks.actions.deleteSingleTask(id));
  }

  const onIsDoneCheckboxToggle = (id) => {
    dispatch(tasks.actions.toggleIfTaskIsDone(id));
  }

  const formatDate = (date) => {
    const time = format(date, 'HH:mm');
    if (isToday(date)) {
      return `Today ${time}`;
    } else if (isYesterday(date)) {
      return `Yesterday ${time}`;
    } else {
      return `${format(date, 'EEEE')} ${time}`;
    }
  }

  return (
    <StyledTaskListContainer>
      <ul>
        {taskList.map((singleTask) => {
          const dateObject = new Date(singleTask.createdAt);
          const time = formatDate(dateObject);

          return (
            <StyledSingleTaskWrapper key={singleTask.id}>
              <label htmlFor={`{task_with_id${singleTask.id}`}>
                <input
                  type="checkbox"
                  id={`{task_with_id${singleTask.id}`}
                  value={singleTask.isDone}
                  onChange={() => onIsDoneCheckboxToggle(singleTask.id)} />
              </label>
              <li>
                {singleTask.name}
                <button
                  type="button"
                  onClick={() => onDeleteSingleTaskBtnClick(singleTask.id)}>
               ✖️
                </button>
                <p>Added {time}</p>
              </li>
            </StyledSingleTaskWrapper>
          )
        })}
      </ul>
      <button type="button" onClick={onDeleteAllTasks}>Delete all tasks</button>
      <p>? / {taskList.length} tasks are done</p>
    </StyledTaskListContainer>
  )
}