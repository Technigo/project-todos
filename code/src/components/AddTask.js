import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'components/reducers/tasks';
import styled from 'styled-components';

const InnerWrapper = styled.div`
background-color: #606c5f;
display: flex;
flex-directon: row;
justify-content: center;
align-items: center;
`
const Label = styled.div`
font-size: 20px;
`

const Input = styled.input`
width: 200px;
height: 30px;
border-radius: 5px;
border: solid pink;
margin-right: 10px;
font-size: 18x;
`

const SubmitBtn = styled.button`
width: 42px;
height: 37px;
border: 2px solid white;
border-radius: 5px;
background-color: #606c5f;
font-size: 15px;
color: white;
position: absolute;

`

const AddTask = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()
  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: Date.now().toString(),
      text: inputValue,
      complete: false
    }
    dispatch(tasks.actions.addTask(newTask));
    setInputValue('');
  }

  return (
    <InnerWrapper>
      <form onSubmit={onFormSubmit}>
        <Label htmlFor="addInput">
          <Input
            value={inputValue}
            type="text"
            placeholder="Don't forget to bring..."
            onChange={(event) => setInputValue(event.target.value)}
            id="addInput" />
          <SubmitBtn type="submit" disabled={inputValue.length === 0}>
            <span className="material-symbols-outlined">
backpack
            </span>
          </SubmitBtn>
        </Label>
      </form>
    </InnerWrapper>
  )
}

export default AddTask;
