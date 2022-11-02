import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import styled from 'styled-components/macro';
import uniqid from 'uniqid';
import moment from 'moment';
import { MainSections } from '../styles/mainStyles';

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
    setListItem('');
    console.log('newTask', newTask)
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
      </AddTaskWrapper>
    </MainSections>
  )
}

export default AddTask;

const AddTaskWrapper = styled.article`
  border: solid 2px red;
  width: 100vw;
  height: auto;
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

