/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import { addTodo } from '../redux/todoSlice';

const FormContainer = styled.div`
background-color: white;
width: 30%;
margin-left: auto;
margin-right: auto;
margin-top: 100px;
margin-bottom: 2px;
display: flex;
flex-direction: column;
align-items: center; 
border: 1px dotted lightgrey;
box-shadow: 3px 5px #888888;
border-radius: 20px;
`

const AddTodoForm = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo({
      title: value
    }))
  }

  return (
    <FormContainer>
      <form onSubmit={onSubmit} className="form">
        <label className="label">Name</label>
        <input
          type="text"
          className="input-form"
          placeholder="Add todo"
          value={value}
          onChange={(event) => setValue(event.target.value)} />
        <button type="submit" className="submit-button">
        Submit
        </button>
      </form>
    </FormContainer>

  )
}

export default AddTodoForm;