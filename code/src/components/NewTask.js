import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';

const InputField = styled.input`
    border-width: 1.5px;
    border: 2px solid #ECE3FC;
    background-color: none;
    height: 19px;
    margin-right: 5px;
`

const AddBtn = styled.button`
 background-color: #e1ecf4;
  border-radius: 3px;
  border: 1px solid #7aa7c7;
  box-shadow: rgba(255, 255, 255, .7) 0 1px 0 0 inset;
  box-sizing: border-box;
  color: #39739d;
  display: inline-block;
  font-family: 'Merriweather';
  font-size: 15px;
  font-weight: 400;
  line-height: 1.15385;
  margin-top: 10%;
  outline: none;
  padding: 2px 2px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;

&:hover,
&:focus {
  background-color: #b3d3ea;
  color: #2c5777;
}

&:focus {
  box-shadow: 0 0 0 4px rgba(0, 149, 255, .15);
}

&:active {
  background-color: #a0c7e4;
  box-shadow: none;
  color: #2c5777;
}
`

const NewTask = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTask = { id: Date.now().toString(),
      name: inputValue,
      isDone: false }
    dispatch(tasks.actions.addItem(newTask))
    setInputValue('');
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <InputField type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} required />
        <AddBtn type="submit">Add</AddBtn>
      </form>
    </div>
  )
}

export default NewTask;