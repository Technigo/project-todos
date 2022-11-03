import styled from 'styled-components';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import todos from 'reducers/todos';
import uniqid from 'uniqid';

const AddTask = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState('');

  // Adds new task to TaskList when submitting form
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(todos.actions.addTask({ // from reducer
      id: uniqid(),
      text: input,
      isDone: false
    }))
    setInput('') // clears textfield after submitting task
  }

  return (
    <FormWrapper onSubmit={submitHandler}>
      <FormContainer>
        <input
          type="text"
          placeholder="add task"
          value={input}
          onChange={(event) => setInput(event.target.value)} />
        <button
          type="submit">
            +
        </button>
      </FormContainer>
    </FormWrapper>
  )
}

export default AddTask;

const FormWrapper = styled.form`
    width: 100%;
    height: 8vh;
    display: flex;
    justify-content: center;
    margin-top: 5%;
`;

const FormContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    input {
      width: 80%;
      border-radius: 5px;
      border: solid 0.2px;
      padding-left: 10px;
    }

    input:focus {
      border-color: green;
  }

    button {
      height: 100%;
      width: 15%;
      font-size: 200%;
      background-color: pink;
      color: white;
      border: none;
      border-radius: 5px;
    }

`;
