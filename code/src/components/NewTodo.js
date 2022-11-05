import React, { useState } from 'react';
import todos from 'reducers/todos';
import { useDispatch } from 'react-redux';
import { Form, InputField, InputBox, Label } from './styles/Form.styled'
import { AddButton } from './styles/Button.styled';

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
        <AddButton type="submit">
            ADD
        </AddButton>
      </Form>
    </InputBox>

  )
}
export default NewTodo;

