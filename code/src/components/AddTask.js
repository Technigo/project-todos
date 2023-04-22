import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import tasks from 'components/reducers/tasks';
import styled from 'styled-components';

const InnerWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const Input = styled.input`
width: 200px;
height: 30px;
`

const SubmitBtn = styled.button`
width: 30px;
height: 30px;
border-radius: 50px;
border-color: black;
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
          <label htmlFor="addInput"
            <Input
              value={inputValue}
              type="text"
              placeholder="Add new thing"
              onChange={(event) => setInputValue(event.target.value)}
              id="addInput" />
          </label>
          <SubmitBtn type="submit" disabled={inputValue.length === 0}>+</SubmitBtn>
        </form>
      </InnerWrapper>
  )
}

export default AddTask;
