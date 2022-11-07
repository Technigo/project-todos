import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro'
import tasks from 'reducers/tasks';
import plus from 'images/plus-icon.svg';

const AddTask = () => {
  const [input, setInput] = useState('')

  const dispatch = useDispatch()

  const onAddTask = (event) => {
    event.preventDefault(event);
    dispatch(tasks.actions.addTask(input));
    setInput('');
  };

  return (
    <AddTaskWrapper>
      <form onSubmit={(event) => onAddTask(event)}>
        <StyledInput
          type="text"
          value={input}
          placeholder="Add new task"
          onChange={(event) => setInput(event.target.value)} />
        <button
          type="submit"
          disabled={input === ''}><PlusIcon
            className="plus-icon"
            src={plus}
            alt="Plus icon" />
        </button>
      </form>
    </AddTaskWrapper>
  );
}

const AddTaskWrapper = styled.section`

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-color: white;
  }

  button {
    background-color: var(--color-accent);
    border-style: none;
    width: 70px;
    height: 70px;
    border-radius: 50px;
    margin: 20px;

    :hover {
      transform: scale(1.1);
    }
  }
`

const StyledInput = styled.input`
  border: none;
  background-color: var(--color-white);
  outline-color: var(--color-lighterAccent);
  padding: 10px;
  width: 100%;
  font-family: var(--font-main);
  font-size: 16px;
`

const PlusIcon = styled.img`
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
`

export default AddTask;