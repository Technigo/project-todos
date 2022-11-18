import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import uniqid from 'uniqid';
import { tasks } from '../reducers/tasks';
import { InnerWrapper } from './GlobayStyles';

export const AddTask = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  // To prevent reloading of the page when hitting refrech
  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTask = { id: uniqid(),
      name: input,
      isChecked: false }
    dispatch(tasks.actions.addTask(newTask));
    setInput('');
  }

  return (
    <InnerWrapper>
      <AddText>ADD NEW TASK</AddText>
      <AddInnerWrapper>
        <form onSubmit={onFormSubmit}>
          <Input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)} />
          <SubmitBtn type="submit" disabled={input.length === 0}>+</SubmitBtn>
        </form>
      </AddInnerWrapper>
    </InnerWrapper>
  )
};

const AddText = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 0.7rem;
  margin: 0;
  text-align: left; 
`

const AddInnerWrapper = styled.div`
    align-items: center; 
    margin-bottom: 25px;

    form {
      display: flex;
    }
`

const Input = styled.input`
  width: 95%;
  line-height: 2rem;
  display: block;
  border: 1px solid grey;
  overflow-wrap: break-word;
  border-radius: 3px;
  margin-right: 10px;
`

const SubmitBtn = styled.button`
  border: none;
  background: none;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
`