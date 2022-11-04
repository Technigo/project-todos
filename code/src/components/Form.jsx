import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';
import toDos from 'reducers/todo';
import { StyledForm } from 'components/styled/Form.styled';

const Form = () => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const taskList = useSelector((store) => store.toDos.items);
  const dispatch = useDispatch();

  useEffect(() => {
    setInput('')
  }, [taskList]);

  const newTask = {
    id: uniqid(),
    task: input.trim(),
    done: false
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!input.trim().length) {
      setError('Nothing to do?');
      setTimeout(() => setError(''), 1500);
      return false;
    }

    for (let i = 0; i < taskList.length; i += 1) {
      if (newTask.task === taskList[i].task) {
        setError('Already on the list!');
        setTimeout(() => setError(''), 1500);
        return false;
      }
    }
    dispatch(toDos.actions.addTask(newTask));
  };

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <button type="submit">+</button>
      <label htmlFor="addTask">
        <input
          id="addTask"
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Add task" />
        <p>{error}</p>
      </label>
    </StyledForm>
  );
};

export default Form;