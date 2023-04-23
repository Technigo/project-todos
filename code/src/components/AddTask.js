import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'
import plus from 'assets/plus.svg'

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
      <Section>
        <Form onSubmit={onFormSubmit}>
          <label htmlFor="addTaskInput">
            <input
              type="text"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              placeholder="Add new task"
              id="addTaskInput" />
          </label>
          <SubmitButton type="submit"><PlusIcon src={plus} alt="" /></SubmitButton>
        </Form>
        {/* <RemoveSection> */}
        <RemoveAllButton type="button" onClick={onRemoveAllButtonClick}>Remove all tasks</RemoveAllButton>
        {/* </RemoveSection> */}
      </Section>
    </>

  )
}

export default AddTask

/* STYLING FOR ADDTASK */

const Section = styled.section`
position: relative;
display: flex;
justify: content: center;
`

const Form = styled.form`

display: flex;
gap: 15px;
width: 100%;

input[type=text] {
      display: flex;
      background: white;
      font-size: 16px;
      color: black;
      outline: 1px solid #FFFFFF;
      border-radius: 10px;
      border: 2px solid #BFEAF5;
      width: 130%;   
      justify-content: flex-start;
      padding: 10px;
}
`

const SubmitButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-left: 50px;
`
/* Style media query for mobile for the margin-left relative to input box in future */

const PlusIcon = styled.img`
  width: 1.3rem;
  border: none;

&:hover {
  transform: scale(1.4);
  }
`
const RemoveAllButton = styled.button`
 background-color: #EAFDFC;
  color: #243763;
  border-radius: 10px;
  border: none;
  padding: 5px;
  cursor: pointer;
  /* position: absolute; */
  /* margin-top: 15px;
  margin-bottom: 10px;
  margin-right: 20px; */

  &:hover {
  background-color: #91D8E4;
  }
`