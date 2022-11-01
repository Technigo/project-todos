/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';

const NewTask = () => {
  return (
    <Form>
      <Label>
        <InputField type="text" placeholder="create new task..." />
        <button type="submit">create!</button>
      </Label>
    </Form>

  )
}
export default NewTask;

const InputField = styled.input`
  background-color: #367857;
  border: none;
  border-radius: 20px;
  color: white;
  padding: 10px 20px;
  width: 70%;
  cursor: pointer;

  
  &::placeholder {
    color: white;
    text-align: center;
}
  &:focusß {
    background-color: white;
    color: black;
}
  &:focus-visible {
    outline: none;
}
`
const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 10%;
  width: 100%;

`
const Label = styled.label`
  display: flex;
  justify-content: center;
  width: 1000%;
`
