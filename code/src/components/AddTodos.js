import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import todos from 'reducers/todos';
import styled from 'styled-components/macro';

const AddTodo = () => {
  const [input, setInput] = useState('');
  // automatically focus on the input (you don't need to click the input)
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const dispatch = useDispatch();

  const onAddTodo = () => {
    setInput(''); //clear inputfield
    dispatch(todos.actions.addTodo(input));
  };

  // Function to handle onChange-event
  const handleNewTodo = (event) => {
    setInput(event.target.value);
  };

  return (
    <TodoInput>
      <label>
        <input
          id="todo"
          type="text"
          value={input}
          onChange={handleNewTodo}
          ref={inputRef}
        />
        <button onClick={onAddTodo} disabled={input.length < 3}>
          <span>add task</span>
        </button>
      </label>
    </TodoInput>
  );
};

export default AddTodo;

const TodoInput = styled.div`
  display: grid;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  align-items: start;
  margin: 0 auto 25px;

  button {
    grid-column: span 1;
    text-align: center;
    height: 55px;
    width: 55px;
    border-radius: 50px;
    background: var(--black);
    color: var(--white);
    border: none;
    font-weight: bold;
    cursor: pointer;
    vertical-align: middle;
    display: inline-block;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.4;
    }
  }
  span {
    display: inline-block;
    vertical-align: middle;
    font-size: 16px;
  }

  input[type='text'] {
    font-size: 16px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid var(--grey);
    margin-right: 10px;
    vertical-align: middle;
  }

  @media screen and (min-width: 768px) {
    column-gap: 50px;
    padding-bottom: 10%;
  }

  @media screen and (min-width: 992px) {
    padding-bottom: 6%;

    button {
      height: 80px;
      width: 80px;
    }

    span {
      font-size: 28px;
    }
  }
`;
