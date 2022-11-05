import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { tasks } from '../reducers/tasks';
import { InnerWrapper } from './GlobayStyles';

export const AddTask = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  // To prevent reloading of the page when hitting refrech
  const onFormSubmit = (event) => {
    event.preventDefault();
  }

  const onAddTask = () => {
    dispatch(tasks.actions.addTask(input))
    setInput('')
  };

  return (
    <InnerWrapper>
      <AddText>ADD NEW TASK</AddText>
      <AddInnerWrapper>
        <form onSubmit={onFormSubmit}>
          <Input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)} />
        </form>
        <SubmitBtn type="submit" onClick={onAddTask} disabled={input.length === 0}>+</SubmitBtn>
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
    display: grid;
    grid-template-columns: 1fr 40px;
    align-items: center; 
    margin-bottom: 15px;
`

const Input = styled.input`
  width: 95%;
  line-height: 2rem;
  display: block;
  border: 1px solid grey;
  overflow-wrap: break-word;
  border-radius: 3px;
`

const SubmitBtn = styled.button`
  border: none;
  background: none;
  font-size: 2rem;
  font-weight: bold;
  margin: 0, 10px;
  cursor: pointer;
`