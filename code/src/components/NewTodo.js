import React, { useState } from 'react';
import todos from 'reducers/todos';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { Button, Label } from './GlobalStyles';

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
    <InputBox>
      <Form onSubmit={onFormSubmit}>
        <Label htmlFor="input">
          <InputField
            onChange={onNewTodoChange}
            type="text"
            placeholder="New todo"
            id="input"
            value={newInput} />
        </Label>
        <Button
          type="submit"
          margin="8px"
          color="#D1DED9"
          lineheight="0px"
          padding="12px"
          backgroundcolor="#1F593C">
            ADD
        </Button>
      </Form>
    </InputBox>

  )
}
export default NewTodo;

const InputField = styled.input`
  background-color: #367857;
  border-radius: 20px;
  border: none;
  color: white;
  width: 100%;
  cursor: pointer;
  padding: 10px 20px;

  &::placeholder {
  color: #81BB9E;
}

  &:focus-visible {
    outline: none;
}
`
const InputBox = styled.div`
  background-color: #367857;
  border-radius: 20px;
  width: 100%;
  margin-bottom: 30px;

`

const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;

`

