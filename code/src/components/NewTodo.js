/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos';
import styled from 'styled-components';

export const NewTodo = () => {
  // The new task to add and the chosen category for this task
  // are saved as a local state and then this data is passed on to the global
  // state in the store when dispatching the addTodo action
  const [id, setId] = useState(0)
  const [name, setName] = useState('')

  const dispatch = useDispatch()

  // Function for adding new to-dos
  const addNewTodo = (event) => {
    event.preventDefault()
    dispatch(todos.actions.addTodo({ name, id }))
    setName('')
    setId('')
  }

  return (
    <NewTodoWrapper>
      <form>
        <LabelTodo label htmlFor="new-todo">New to-do: </LabelTodo>
        <TodoInput
          type="text"
          placeholder="Add to-do"
          value={name}
          id={id}
          input="new-todo"
          onChange={(event) => setName(event.target.value)} />
        <AddButton button type="submit" onClick={addNewTodo}> Add </AddButton>
      </form>
    </NewTodoWrapper>
  )
}

const NewTodoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  font-size: 15px;
`
const AddButton = styled.button`
  margin-left: 10px;
  padding: 5px;
`

const LabelTodo = styled.label`
margin: 5px;
font-size: 20px;
`

const TodoInput = styled.input`
padding: 5px;
`
// const NewTodoText = styled.form`
// padding-bottom: 10px;`

/*   const dispatch = useDispatch()
  const [input, setInput] = useState('')

  const addNewTodo = () => {
    dispatch(todos.actions.addNewTodo(input))
    setInput('')
  } */