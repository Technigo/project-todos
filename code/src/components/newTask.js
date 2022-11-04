/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
import { AddButton } from 'styledComponents/Buttons';
import { Input } from 'styledComponents/Input';
import { Task } from 'styledComponents/Task';
import { v4 as uuid } from 'uuid';

const NewTask = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  uuid();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      id: uuid(),
      text: input,
      isComplete: false
    };

    dispatch(tasks.actions.addTask(newTask));
    setInput('');
  };
  console.log(input);
  return (
    <Task>
      <form onSubmit={onFormSubmit}>
        <label>
          <Input
            type="text"
            value={input}
            placeholder="Enter new task"
            onChange={(event) => setInput(event.target.value)}
            required
          />
        </label>
        <AddButton type="submit"> + </AddButton>
      </form>
    </Task>
  );
};

export default NewTask;
