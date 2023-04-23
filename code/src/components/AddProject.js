import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addProject } from '../reducers/projects';

const Form = styled.form`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 1em;
  color:#0f1029;
  width:250px;
  font-family: 'Montserrat', sans-serif;
  font-weight:400;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: #b8b4ba;
  color: white;
  padding: 0.5em 1em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-weight:400;
  font-size: 16px;

  &:hover {
    background-color:#586535
;
  }
`;

const AddProject = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      dispatch(addProject({ name: input.trim() }))
      setInput('')
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new project" />
      <Button type="submit">Add</Button>
    </Form>

  )
}

export default AddProject