/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { addTodo } from '../redux/todoSlice';

const FormContainer = styled.div`
border: 2px solid blue; 
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