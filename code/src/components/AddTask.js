import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'components/reducers/tasks';
import styled from 'styled-components';

const InnerWrapper = styled.div`
background-color: pink;
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
width: 37px;
height: 37px;
border-radius: 5px;
border-color: black;
background-color: white;
font-size: 15px;
color: black;
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
          <SubmitBtn type="submit" disabled={inputValue.length === 0}>Add</SubmitBtn>
        </Label>
      </form>
    </InnerWrapper>
  )
}

export default AddTask;
