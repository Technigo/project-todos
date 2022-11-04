/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import { AddButton } from 'StyledComponents/Button';
import { addTodo } from '../redux/todoSlice';

const FormContainer = styled.div`
background-color: white;
width: fit-content;
margin-left: auto;
margin-right: auto;
margin-top: 5%;
margin-bottom: 2px;
display: flex;
flex-direction: column;
align-items: center; 
border: 2px solid lightgrey;
box-shadow: 3px 5px #888888;
border-radius: 20px;

.input-form {
  border-radius: 20px;
  height: 30px;
  margin-top: 5%;
  border: 2px solid lightgray;
 margin-left: 5px;
}
`

const AddTodoForm = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo({
      title: value
    }))
    setValue('');
  }

  return (
    <FormContainer>
      <form onSubmit={onSubmit} className="form">

        <input
          type="text"
          className="input-form"
          placeholder="Add todo..."
          value={value}
          onChange={(event) => setValue(event.target.value)} />
        <AddButton type="submit" className="submit-button" />
      </form>
    </FormContainer>

  )
}

export default AddTodoForm;