import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'components/reducers/tasks';
import uniqid from 'uniqid';
import styled from 'styled-components';

const InnerWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const AddInnerWrapper = styled.div`
backround-color: blue;
`

const Input = styled.input`
width: 200px;
height: 30px;
`

const SubmitBtn = styled.button`
width: 30px;
height: 30px;
border-radius: 50px;
`

const capitalize = (stringToCapitalize) => {
  return stringToCapitalize.charAt(0).toUpperCase() + stringToCapitalize.slice(1);
}

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
      <AddInnerWrapper>
        <form onSubmit={onFormSubmit}>
          <label htmlFor="addTask"
          <Input
            type="text"
            placeholder="Add new thing"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)} 
            id="addTaskInput"/>
            </label>
          <SubmitBtn type="submit" disabled={inputValue.length === 0}>+</SubmitBtn>
        </form>
      </AddInnerWrapper>
    </InnerWrapper>
  )
}

export default AddTask;