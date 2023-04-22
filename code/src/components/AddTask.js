// /* eslint-disable */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import tasks from 'components/reducers/tasks.js';
import styled from 'styled-components';
import { AddButton, DeleteButton, Title } from './styles/global';
import { Counter } from './Counter';

// Object.defineProperty(String.prototype, 'capitalize', {
//   value: () => {
//     return this.charAt(0).toUpperCase() + this.slice(1);
//   },
//   enumerable: false
// });

const capitalize = (stringToCapitalize) => {
  return stringToCapitalize.charAt(0).toUpperCase() + stringToCapitalize.slice(1);
}

const NewTask = styled.input`
    border: none;
    border-bottom: solid black 1px;
    width: 80%;
    margin-left: 20px;
    &:focus {
        outline: none;
    }
`
const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 20px;
`
const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 20px;
`
const AddTask = () => { // A function.
  const [inputValue, setInputValue] = useState(''); // State variable to track input. Set to 0.
  const dispatch = useDispatch(); // Create/declare dispatch to be able to go to store/tasks.
  const onFormSubmit = (event) => {
    event.preventDefault(); // Otherwise form will reload.
    const addTask = {
      id: uuidv4(), // Date.now().toString()
      name: capitalize(inputValue), // Method, then input value, sending it there.
      isCompleted: false // Not completed yet
    }
    dispatch(tasks.actions.addTask(addTask)); // Dispatch an action. Dispatch = access store
    // and select reducer/action. Referencing the imported reducer "task".
    setInputValue(''); // Empty string for user to not have to delete previous input.
  };

  const onDeleteAllTaskBtnClick = () => { // Function.
    // Here create what happens at onCLick. Copy dispatch from onFormSubmit above.
    dispatch(tasks.actions.deleteAllTask()); // Choose ? as declared? in tasksjs reducer.
    // Leave ? empty since no action is happening.
  }
  // Add this function to onClickEvent below.
  // Here comes the html part.
  return (
    <section>
      <HeaderWrapper>
        <Title>
        To Do ToDay Too
        </Title>
      </HeaderWrapper>
      <form onSubmit={onFormSubmit}>
        {/* <label htmlFor="newTaskInput"> */}
        <NewTask
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          id="newTaskInput" />
        {/* </label> */}
        <AddButton
          type="submit"> Add new task
        </AddButton>
      </form>
      <FooterWrapper>
        <Counter />
        <DeleteButton
          type="button"
          onClick={onDeleteAllTaskBtnClick}> Delete all tasks
        </DeleteButton>
      </FooterWrapper>
    </section>
  )
}

export default AddTask;

// value={inputValue} in input to clear field.
// Add functionalities before ?