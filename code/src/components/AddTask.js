import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'components/reducers/tasks';
import uniqid from 'uniqid';
import styled from 'styled-components';

const InnerWrapper = styled.div`
display: flex;
flex-direction: column;
`
const AddText = styled.div`
font-size: 18px;
`

const AddInnerWrapper = styled.div`
backround-color: blue;
`

const Input = styled.div`
width: 35px;
`

const SubmitBtn = styled.button`
width: 30px;
height: 30px;
border-radius: 50px;
`

const AddTask = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()
  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTask = { id: uniqid(),
      text: inputValue,
      isChecked: false }
    dispatch(tasks.actions.addTask(newTask));
    setInputValue('');
  }

  return (
    <InnerWrapper>
      <AddText>Add new things to the list</AddText>
      <AddInnerWrapper>
        <form onSubmit={onFormSubmit}>
          <Input
            type="text"
            value="{input}"
            onChange={(event) => setInputValue(event.target.value)} />
          <SubmitBtn type="submit" disabled={inputValue.length === 0}>+</SubmitBtn>
        </form>
      </AddInnerWrapper>
    </InnerWrapper>
  )
}

export default AddTask;