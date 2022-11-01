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
      <form onSubmit={handleOnFormSubmit}>
        <textarea
          value={newTask}
          onChange={handleNewTaskChange}
          placeholder="Write down your task" />
        <AddTaskButton
          type="submit">+
        </AddTaskButton>
      </form>
    </TaskInputWrapper>
  )
}

export default TaskInput;

const AddTaskButton = styled.button`
  background-color: blueviolet;
  cursor: pointer;
  :hover {
    background-color: grey;
  }
`

const TaskInputWrapper = styled.div`
  display: flex;
`