import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from 'reducers/tasks';

import sendIcon from 'assets/paper-plane-icon.svg'

import { v4 as uuid } from 'uuid'; // This was installed with npm i uuidv4
import moment from 'moment'; // This was installed with npm i moment.

import styled from 'styled-components/macro';

const TaskInput = () => {
  const [newTask, setNewTask] = useState('');

  const uniqueID = uuid(); // This helps to provide a unique ID for every task

  const dispatch = useDispatch();

  const handleOnFormSubmit = (event) => {
    event.preventDefault();

    const newTaskInfo = {
      id: uniqueID,
      taskDescription: newTask,
      isChecked: false,
      createdAt: moment().format('l')
    };

    dispatch(addTask(newTaskInfo));

    setNewTask('');
  };

  return (
    <TaskInputWrapper>
      <Form onSubmit={handleOnFormSubmit}>
        <TextInput
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Write down your task" />
        <AddTaskButton
          type="submit"
          disabled={newTask.length <= 0}>
          <img src={sendIcon} alt="send task" />
        </AddTaskButton>
      </Form>
    </TaskInputWrapper>
  );
};

export default TaskInput;

const TaskInputWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`
const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;  
`
const TextInput = styled.input`
  width: 100%;
  margin: 0;
  padding: 0;
  resize: none;
  border: 1px solid rgb(162, 162, 162);
  height: 30px;
  word-wrap: break-word;

  :focus {
    outline: none!important;
    border: 1px solid pink;
  }
`
const AddTaskButton = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;  
  img {
    margin: 3px;
    width: 25px;
    height: 25px;       
  }
  
  cursor: pointer;
  /* :hover {
    background-color: grey;
  } */
`

