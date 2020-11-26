import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { todos } from '../reducers/todos';
import { Form, StyledLabel, InputField, InputAdd } from '../styledComponents/styled_components';

// Receives listId as input
export const TodoInput = () => {
  const dispatch = useDispatch();
  
  // State for input from text box
  const [inputValue, setInputValue] = useState('');
  // State for date
  const [date, setDate] = useState(new Date());
  // State for Due Date
  //const [dueDate, setDueDate] = useState();

  //useEffect(()
  
  const addDate = () => {
    const timer = setInterval(() => {
      return setDate(new Date());
    }, 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  }
addDate()

  // Create handle submit function to dispatch addTodo
  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue)

    // This is where we will dispatch the action to save the new todo item
    // The 'actions' are the names of the reducers we have defined. First 'actions'
    // and then name of reducer.
    dispatch(
      todos.actions.addTodo({
        description: inputValue,
        done: false,
        //dueDate: dueDate
      })
    );

    // Clear text field after saved and component re-renders
    setInputValue('');
  };

  return (
    <>
      <StyledLabel htmlFor='todo-input'>
        {/*<p> Time : {date.toLocaleTimeString()}</p>*/}
        date: {date.toLocaleDateString()}      
      </StyledLabel>
      <Form className='todo-input' onSubmit={handleOnSubmit}>
        <InputField
          type='text'
          aria-label='{labelText}'
          aria-required='true'
          placeholder='My next todo'
          onChange={event => setInputValue(event.target.value)}
          value={inputValue}
          className='todo-input-text'
        ></InputField>  
        <InputAdd 
          type='submit'
          aria-label='labelAddButton'
          className='todo-input-button'
          value='+'
        ></InputAdd>
      </Form>
    </>
  );
};