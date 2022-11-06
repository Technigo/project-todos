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
        <NewTaskInput
          type="text"
          placeholder="Add task"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          required />
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
    height: 50px;
    display: flex;
    justify-content: center;
    margin-top: 5%;
`;

const FormContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    button {
      height: 100%;
      width: 50px;
      font-size: 200%;
      background-color: var(--primary);
      color: white;
      border: none;
      border-radius: 5px;

      &:hover{
        cursor: pointer;
        background-color: var(--secondary);
      }
    }
`;

const NewTaskInput = styled.input`
  width: 77%;
  border-radius: 5px;
  border: solid 0.2px;
  padding-left: 10px;

  @media (min-width: 1024px) { 
    font-size: 20px; 
  }

&:focus {
  outline: none;
  border:solid 1.5px var(--primary);
  color: var(--primary);
}
`;
