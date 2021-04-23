import React, { useState, forwardRef } from 'react';
import styled from 'styled-components'; 
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';
import moment from 'moment';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import todos from '../reducers/todos';

import AddTodoButton from './AddTodoButton';
import SubmitButton from './SubmitButton';
import ErrorMessage from './ErrorMessage';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: transparent;
  padding: 3vh;
  border-bottom: solid 1px #e5e5e5;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  background: transparent;
`;

const Label = styled.label`
  background: transparent;
  width: 50%;
  margin-right: auto;
`;

const InputText = styled.input`
  width: 50%;
  font-size: 18px;
  border: none;
`;

const DateButton = styled.button`
  background-color: #ea9a96;
  color: #303960;
  border: none;
  border-radius: 5px;
  font-size: 18px;
`

const NewTodo = () => {
  const showForm = useSelector((store) => store.todos.showForm);
  
  const dispatch = useDispatch();
  
  const [todo, setTodo] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [errorMessage, setErrorMessage] = useState('');

  const CustomInput = forwardRef(
    ({ value, onClick }, ref) => (
      <DateButton 
        onClick={onClick} 
        ref={ref}
      >
        {value}
      </DateButton>
    ),
  );
  
  const validateFormInput = () => {
    let isFormValid = true;

    if (todo.length < 1) {
      setErrorMessage('Please type in a todo!'); 
      isFormValid = false;
    } else {
      setErrorMessage('');
      isFormValid = true;
    }

    return isFormValid;
  };

  const onTodoSubmit = (e) => {
    e.preventDefault();

    if (!validateFormInput()) {
      return;
    }

    const newTodo = {
      id: uniqid(),
      content: todo,
      timeStamp: moment().format(),
      isComplete: false,
      isEdit: false,
    };

    dispatch(todos.actions.addTodo(newTodo));
    setTodo('');
  };

  return (
    <Form onSubmit={onTodoSubmit}>
      {!showForm ? (
        <AddTodoButton /> 
      ) : (       
        <>
          <Container>
            <SubmitButton />
            <Label>
              <InputText
                id="newTodo"
                type="text"
                placeholder="Add todo"
                value={todo}
                onChange={e => setTodo(e.target.value)}
              >
              </InputText>
            </Label>
            <DatePicker 
              selected={startDate}
              placeholderText="Due date" 
              onChange={date => setStartDate(date)} 
              withPortal
              customInput={<CustomInput />}
            >
            </DatePicker>
          </Container>
          <ErrorMessage 
            errorMessage={errorMessage}
          />
        </>
      )}


    </Form>
  );
};

export default NewTodo;