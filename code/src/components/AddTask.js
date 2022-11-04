import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import styled from 'styled-components/macro';
import uniqid from 'uniqid';
import moment from 'moment';
import TaskCounter from 'components/TaskCounter';
import { MainSections, Devices } from '../styles/mainStyles';

const AddTask = () => {
  const [listItem, setListItem] = useState('');

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      id: uniqid(),
      text: listItem,
      createdAt: moment().format('LLL'),
      completed: false
    }
    dispatch(tasks.actions.addItem(newTask));
    console.log(newTask)
    setListItem('');
  }

  return (
    <MainSections>
      <AddTaskWrapper>
        <form onSubmit={onFormSubmit}>
          <TaskLabel htmlFor="add-new-todo-post">Add a new ToDo:
            <TaskInput
              type="text"
              placeholder="..."
              value={listItem}
              onChange={(event) => setListItem(event.target.value)} />
            <TaskBtn
              disabled={listItem.length < 1}
              type="submit">Add
            </TaskBtn>
          </TaskLabel>
        </form>
        <TaskCounter />
      </AddTaskWrapper>
    </MainSections>
  )
}

export default AddTask;

const AddTaskWrapper = styled.article`
  width: 100vw;

  @media ${Devices.tablet} {
  width: 50vw;
  height: auto;
  }
`

const TaskLabel = styled.label`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #5f6638;
  font-size: 1.2em;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
`

const TaskInput = styled.input`
  color: black;
  font-size: 0.8em;
  font-family: 'Montserrat', sans-serif;
  padding: 0.5% 1%;
  margin: 1%;
`

const TaskBtn = styled.button`
  color: white;
  background-color: #909A5D;
  border-radius: 5px;
  font-size: 1em;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  padding: 0.5% 1%;

  &:hover {
    transition: all .3s ease-in-out;
    transform: scale(1.1);
  }

  &:disabled {
    background-color: lightgrey;

    &:hover {
    transform: scale(1);
    }
  }
`

