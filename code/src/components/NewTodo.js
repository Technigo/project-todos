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
  background: #ffffff;
  padding: 3vh;

  @media (min-width: 768px) {
    padding: 4vh;
  }
  
  @media (min-width: 1200px) {
    padding: 5vh;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  background: transparent;
  padding-bottom: 20px;
`;

const Label = styled.label`
  background: transparent;
  width: 50%;
  margin-right: auto;

  @media (min-width: 768px) {
    width: 100%;
  }
`;

const InputText = styled.input`
  width: 50%;
  font-size: 16px;
  border: none;

  @media (min-width: 768px) {
    width: 70%;
    font-size: 20px;
  }

  @media (min-width: 1200px) {
    width: 100%;
    font-size: 28px;
  }
`;

const DateButton = styled.button`
  background-color: #ea9a96;
  color: #303960;
  border: none;
  border-radius: 5px;
  font-size: 16px;

  @media (min-width: 768px) {
    font-size: 20px;
  }
  
  @media (min-width: 1200px) {
    font-size: 28px;
  }
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
      isEdit: false
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