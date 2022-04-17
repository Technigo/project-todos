import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import uniqid from 'uniqid';

import todos from 'reducers/todos';

const FormContainer = styled.div`
  margin: auto;
  width: 65vw;
  background-color: #d7d8d9;
  display: flex;
  justify-content: center;
  padding-top: 20px;

  form {
  }

  .addNew {
    border: 2px solid #5c6f73;
    padding: 10px;
    border-radius: 5px;
  }

  .addNew::placeholder {
    color: #5c6f73;
  }

  .addBtn {
    margin-left: 20px;
    border: 2px solid #5c6f73;
    padding: 8px;
    border-radius: 50%;
  }
`;

const AddTask = () => {
  const [input, setInput] = useState('');

  const dispatch = useDispatch();

  const onAddSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      id: uniqid(),
      text: input,
      isComplete: false,
    };

    dispatch(todos.actions.addItem(newTask));

    setInput('');
  };

  return (
    <FormContainer>
      <form onSubmit={onAddSubmit}>
        <label>
          <input
            type="text"
            value={input}
            placeholder="Add new task here"
            onChange={(e) => setInput(e.target.value)}
            required
            className="addNew"
          />
        </label>
        <button
          className="addBtn"
          onClick={onAddSubmit}
          type="submit"
          disabled={input.length < 1}>
          <span role="img" aria-label="add">
            ➕
          </span>
        </button>
      </form>
    </FormContainer>
  );
};

export default AddTask;
