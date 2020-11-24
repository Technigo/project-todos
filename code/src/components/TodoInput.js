import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { todos } from '../reducers/todos';


const Form = styled.form`
  display: flex;
  justify-content: center;
`

const StyledLabel = styled.h3`
  font-size: 16px;
  text-align: right;
  width: 80%;
  margin: auto;
  padding: 10px;
  font-weight: 300;
`

const InputField = styled.input`
  font-size: 20px;
  padding: 10px;
  width: 65%;
  border: none;
`
const InputAdd = styled(InputField)`
  font-size: 40px;
  width: 15%;
  background: white;
  border: none;
  margin-left: -1px;
`

// Receives listId as input
export const TodoInput = () => {
  const dispatch = useDispatch();
  
  // State for input from text box
  const [inputValue, setInputValue] = useState('');
  // State for date
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      return setDate(new Date());
    }, 1000 )
    return function cleanup() {
        clearInterval(timer)
    }

});

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
        done: false
      })
    );
    

    // Clear text field after saved and component re-renders
    setInputValue('');
  };

  return (
    <>
      <StyledLabel>
        {/*<p> Time : {date.toLocaleTimeString()}</p>*/}
        date: {date.toLocaleDateString()}      
      </StyledLabel>
      <Form className='todo-input' onSubmit={handleOnSubmit}>
        <InputField
          type='text'
          onChange={event => setInputValue(event.target.value)}
          value={inputValue}
          className='todo-input-text'
        ></InputField>        
        <InputAdd 
          type='submit'
          className='todo-input-button'
          value='+'
        ></InputAdd>
      </Form>
    </>
  );
};