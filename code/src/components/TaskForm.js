import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import { Button, Icon } from 'styles/Buttons';
import Plus from '../icons/plus.svg'
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
        <Button
          type="submit"
          onClick={addTask}
          disabled={newToDo.length === 0}>
          <Icon src={Plus} alt="Add new task" />
        </Button>
      </InputWrapper>
    </Section>
  )
}

export default TaskForm;

