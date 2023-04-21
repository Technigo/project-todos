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
          <button type="submit">Add</button>
        </Form>
        <Button type="button" onClick={onRemoveAllButtonClick}>Remove all</Button>
      </section>
    </>

  )
}

export default AddTask

/* STYLING FOR ADDTASK */

const Form = styled.form`

input[type=text] {
      background: white;
      font-size: 16px;
      color: #82AAE3;
      outline: 1px solid #FFFFFF;
      border-radius: 5px;
      width: 100%;   
}
`

const Button = styled.button`
  background-color: #82AAE3;
  color: #FFFFFF;
  border-radius: 30px;
  border: none;
  padding: 10px;
  align-text: center;

&:hover {
  background-color: #91D8E4;
}
`

