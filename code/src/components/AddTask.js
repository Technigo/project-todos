import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
import { Addbutton } from './styled_components/buttons';

export const AddTask = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch()
  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: Date.now().toString(),
      name: inputValue,
      checked: false
    }
    dispatch(tasks.actions.addTask(newTask));
    setInputValue('');
  }

  return (
    <StyledSection>
      <StyledForm onSubmit={onFormSubmit}>
        <label htmlFor="addTodoInput">
          <input id="addTodoInput" type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
        </label>
        <Addbutton type="submit" disabled={!inputValue}>+</Addbutton>
      </StyledForm>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  `

const StyledForm = styled.form`
    display: flex;
    align-items: center;
    width: 70%;

    label {
      width: 90%;
      margin-right: 5px;
    }

    input{
      border: none;
      height: 30px;
      border-radius: 10px;
      width: 100%;
    }
`

