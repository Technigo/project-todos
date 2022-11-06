/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/todos';
import { InnerWrapper, Btn } from 'utils/GlobalStyle';
import styled from 'styled-components/macro'

const AddTask = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  // prevents everything from reloading when submitting new task
  const onFormSubmit = (event) => {
    event.preventDefault();

    // Adds the new task to the array and then removes the input after being submitted
    const newTask = { id: Date.now().toString(),
      name: inputValue,
      isCompleted: false }
    dispatch(tasks.actions.addTask(newTask));
    setInputValue('');
  }

  return (
    <InnerWrapper addNewInner>
      <form onSubmit={onFormSubmit}>
        <label>
          <TextInput type="text" value={inputValue} placeholder="Add new task..." onChange={(event) => setInputValue(event.target.value)} />
        </label>
        <Btn type="submit"> Add </Btn>
      </form>
    </InnerWrapper>
  )
}

export default AddTask;

const TextInput = styled.input`
border: none;
border-radius: 5px;
padding: 2% 1% 2% 5%;
margin-right: 3%;
outline-color: #79b6c1;
`;
