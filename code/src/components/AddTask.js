import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import styled from 'styled-components';

const InputWrapper = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   gap: 1em;

  input {
    width: 40%;
    height: 50px;
    border: #9E7540 solid 1px;
    border-radius: 5px;
    color: #DA723C;
    @media (min-width: 900px){
      width: 20%;
      height: 50px;
      
    }
  }

  button {
    color: #FDF1D6;
    background-color: #FF8400;
    font-size: 18px;
    border: #FF8400 solid 2px;
    border-radius: 5px;
    padding: 5px 10px;
  }
  button:hover{
          transform: scale(1.15);
  }

`
const AddTask = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const onAddTask = (event) => {
    event.preventDefault();
    dispatch(tasks.actions.addTask(inputValue))
    // empty the text field
    setInputValue('')
  }
  return (
    <InputWrapper>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)} />
      <button type="button" onClick={onAddTask}> add new </button>
    </InputWrapper>
  )
}
export default AddTask;