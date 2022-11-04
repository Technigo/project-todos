import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';
import toDos from 'reducers/todo';
import { StyledForm } from 'components/styled/Form.styled';

const Form = () => {
  const [input, setInput] = useState('');
  const taskList = useSelector((store) => store.toDos.items);
  const dispatch = useDispatch();

  useEffect(() => {
    setInput('')
  }, [taskList]);

  const newTask = {
    id: uniqid(),
    task: input,
    done: false
  };

  const handleFormSubit = (event) => {
    event.preventDefault();
    dispatch((toDos.actions.addTask(newTask)));
  };

  return (
    <StyledForm onSubmit={handleFormSubit}>
      <button type="submit">+</button>
      <label htmlFor="addTask">
        <input
          id="addTask"
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Add task"
          required />
      </label>
    </StyledForm>
  );
};

export default Form;