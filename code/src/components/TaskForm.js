import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import { AddTaskButton } from 'styles/Buttons';
import { Section, InputWrapper, InputForm } from '../styles/styledComponents';

const TaskForm = () => {
  const [newToDo, setNewToDo] = useState('')
  const dispatch = useDispatch();

  const addTask = (e) => {
    e.preventDefault();
    dispatch(tasks.actions.addTodo(newToDo));
    setNewToDo('');
  };

  return (
    <Section>
      <InputWrapper>
        <InputForm
          type="input"
          placeholder="Add tasks here..."
          onChange={(event) => setNewToDo(event.target.value)}
          value={newToDo}
          required />
        <AddTaskButton
          type="submit"
          onClick={addTask}>➕
        </AddTaskButton>
      </InputWrapper>
    </Section>
  )
}

export default TaskForm;

