import React, { useState } from 'react';
import todos from 'reducers/todos';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { Label } from './GlobalStyles';

const NewTodo = () => {
  const [newInput, setNewInput] = useState('');

  const onNewTodoChange = (event) => {
    setNewInput(event.target.value)
  }

  const dispatch = useDispatch()

  const onFormSubmit = (event) => {
    event.preventDefault()
    const creatingNewTodo = {
      id: Date.now(),
      name: newInput,
      isChecked: false
    }
    dispatch(todos.actions.addTodo(creatingNewTodo))
    setNewInput('')
  }

  return (
    <Form onSubmit={onFormSubmit}>
      <p>
        <InputField
          onChange={onNewTodoChange}
          type="text"
          placeholder="create new todo..."
          id="input"
          value={newInput} />
        <Label htmlFor="input" />
        <button
          type="submit"
          margin="10px"
          backgroundColor="inherit">
            add
        </button>
      </p>
    </Form>

  )
}
export default NewTodo;

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

