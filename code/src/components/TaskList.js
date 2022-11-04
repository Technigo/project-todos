/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask, setAllItems, toggleChecked } from 'reducers/tasks';
import styled from 'styled-components/macro';
import removeTaskIcon from 'assets/x-alphabet-icon.svg'
import { filters } from './TaskFilters';

const TaskList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const listFromStorage = JSON.parse(localStorage.getItem('toDoList'))
    if (listFromStorage) {
      dispatch(setAllItems(listFromStorage))
    }
  }, [dispatch])

  const taskList = useSelector((store) => store.tasks.items);
  const filter = useSelector((store) => store.tasks.filteredBy);

  // ⬇ This function is filtering the task list based on ALL/COMPLETED/NOTCOMPLETED
  const filteredTasksList = () => {
    if (filter === filters.COMPLETED) {
      return taskList.filter((task) => task.isChecked);
    } else if (filter === filters.NOT_COMPLETED) {
      return taskList.filter((task) => !task.isChecked);
    } else {
      return taskList;
    }
  };

  useEffect(() => {
    localStorage.setItem('toDoList', JSON.stringify(taskList))
  }, [taskList])
  return (
    <TaskListContainer>
      {filteredTasksList().map((task) => {
        return (
          <InputWrapper key={task.id}>
            <input
              type="checkbox"
              checked={task.isChecked}
              onChange={() => dispatch(toggleChecked(task.id))}
              id={task.id} />
            <label className="strikethrough">{task.taskDescription}</label>
            <TimeStamp>
              {task.createdAt.toLowerCase()}
            </TimeStamp>
            <RemoveTaskBtn type="button" onClick={() => dispatch(removeTask(task.id))}>
              <img src={removeTaskIcon} alt="delete task" />
            </RemoveTaskBtn>
          </InputWrapper>
        )
      })}
    </TaskListContainer>
  );
};

export default TaskList;

const TaskListContainer = styled.section`
  display: flex;
  flex-direction:column;
  align-items: flex-start;
  word-wrap: break-all;
  row-gap: 5px;
  @media (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: grey;
  border-radius: 5px;
  label {
    width: 100%;
    margin: 10px;
    padding: 0;
    word-wrap: break-word;
  }
  input[type = checkbox]:checked + label.strikethrough{
    text-decoration:line-through;
    color: lightgray;
  }
  @media (min-width: 1024px) {
    width: 49%;
  }
`
const RemoveTaskBtn = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  margin: 5px;
  padding: 0;
  img {
    width: 30px;
    height: auto;    
  }
  @media (min-width: 768px) {
    margin: 8px;
    img{
      width: 35px;
    }
  }
`
const TimeStamp = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  font-size: 12px;
  color: lightgrey;
  @media (min-width: 1024px) {
    width: 45%;
  }
  `