import React, { useState } from 'react'
import styled from 'styled-components'
// import GlobalStyle from 'styles/GlobalStyle'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'

const capitalize = (stringToCapitalize) => {
  return stringToCapitalize.charAt(0).toUpperCase() + stringToCapitalize.slice(1);
}

const AddTask = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: Date.now().toString(),
      name: capitalize(inputValue),
      isComplete: false
    };
    dispatch(tasks.actions.addTask(newTask));
    setInputValue('');
  }

  const onRemoveAllButtonClick = () => {
    dispatch(tasks.actions.removeAllTasks());
  }
  return (
    <>
      {/* <GlobalStyle /> */}
      <section>
        <Form onSubmit={onFormSubmit}>
          <label htmlFor="addTaskInput">
            <input
              type="text"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              placeholder="Add new task"
              id="addTaskInput" />
          </label>
          <SubmitButton type="submit">➕</SubmitButton>
        </Form>
        <RemoveButton type="button" onClick={onRemoveAllButtonClick}>Remove all</RemoveButton>
      </section>
    </>

  )
}

export default AddTask

/* STYLING FOR ADDTASK */

const Form = styled.form`

display: flex;
gap: 5px;

input[type=text] {
      background: white;
      font-size: 16px;
      color: black;
      outline: 1px solid #FFFFFF;
      border-radius: 5px;
      width: 100%;   
      justify-content: flex-start;
}
`

const SubmitButton = styled.button`
  border: none;
  background-color: #EAFDFC;

  &:hover {
      transform: scale(1.2);
    }
`
const RemoveButton = styled.button`
 background-color: #BFEAF5;
  color: #243763;
  border-radius: 30px;
  border: none;
  padding: 10px;
  align-text: center;

  &:hover {
  background-color: #EAFDFC;
  }

`
