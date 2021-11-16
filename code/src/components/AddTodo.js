import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
// import ReactDatePicker from 'react-datepicker';

import todos from '../reducers/todos';

import { StyledAddTodoButton } from './StyledButtons';

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2vh 4vw;
`;

const StyledInput = styled.input`
  font-family: 'Roboto', sans-serif;
  color: #333;
  font-size: 1.2rem;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  border-radius: 0.2rem;
  background-color: rgb(255, 255, 255);
  border: none;
  width: 90%;
  display: inline-block;
  border-bottom: 0.3rem solid transparent;
  transition: all 0.3s;
`;

const AddTodo = () => {
  const [todoInput, setTodoInput] = useState('');
  // const [startDate, setStartDate] = useState(new Date());

  const dispatch = useDispatch();

  const onAddTodo = (event) => {
    event.preventDefault();
    dispatch(todos.actions.addTodo(todoInput));
    setTodoInput('');
  };

  const onTodoInputChange = (event) => {
    setTodoInput(event.target.value);

    // console.log(onTodoInputChange);
  };

  return (
    <StyledForm onSubmit={onAddTodo}>
      <StyledInput
        type='text'
        value={todoInput}
        onChange={onTodoInputChange}
        placeholder='&#x0002B; Add task'
        required=''
      />
      <StyledAddTodoButton type='submit' disabled={todoInput === ''}>
        &#x0002B;
      </StyledAddTodoButton>
      {/* <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      /> */}
    </StyledForm>
  );
};

export default AddTodo;
