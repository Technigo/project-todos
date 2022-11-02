import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid'; // This was installed with npm install uuidv4
import tasks from 'reducers/tasks';
import styled from 'styled-components/macro';

const TaskInput = () => {
  const [newTask, setNewTask] = useState('');

  const uniqueID = uuid(); // This helps to provide a unique ID for every task

  const dispatch = useDispatch();

  const handleOnFormSubmit = (event) => {
    event.preventDefault();

    dispatch(tasks.actions.addTask({
      id: uniqueID,
      taskDescription: newTask,
      isChecked: false
    }));

    setNewTask('');
  }

  const handleNewTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  return (
    <TaskInputWrapper>
      <Form onSubmit={handleOnFormSubmit}>
        <TextArea
          value={newTask}
          onChange={handleNewTaskChange}
          placeholder="Write down your task" />
        <AddTaskButton
          type="submit"
          disabled={newTask.length <= 0}>+
        </AddTaskButton>
      </Form>
    </TaskInputWrapper>
  )
}

export default TaskInput;

const TaskInputWrapper = styled.div`
  display: flex;  
  
`
const Form = styled.form`
  display: flex;
  align-items: center;  
`
const TextArea = styled.textarea`
  padding: 8px;
  resize: none;
  border: 1px solid rgb(162, 162, 162);
  height: 50px;
  word-wrap: break-word;

  :focus {
    outline: none!important;
    border: 1px solid pink;
  }
`

const AddTaskButton = styled.button`
  background-color: lightgreen;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  :hover {
    background-color: grey;
  }
`

