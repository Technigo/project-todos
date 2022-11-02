import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import { AddTaskButton } from 'styles/Buttons';
import { Section, Wrapper } from '../styles/styledComponents';

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
      <Wrapper>
        <input
          type="text"
          placeholder="Add tasks here..."
          onChange={(event) => setNewToDo(event.target.value)}
          value={newToDo} />
        <AddTaskButton
          type="submit"
          onClick={addTask}>Add task
        </AddTaskButton>
      </Wrapper>
    </Section>
  )
}

export default TaskForm;

