/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos';
import styled from 'styled-components';

export const NewTodo = () => {
  // The new task to add and the chosen category for this task
  // are saved as a local state and then this data is passed on to the global
  // state in the store when dispatching the addTodo action
  const [name, setName] = useState('')

  const dispatch = useDispatch()

  // Function for adding new to-dos
  const addNewTodo = (event) => {
    event.preventDefault() // prevents the form from reloading when adding new todo
    dispatch(todos.actions.addTodo({ name,
      id: Date.now(),
      completed: false }))
    setName('') // clears input field
  }

  return (
    <NewTodoWrapper>
      <form>
        <label htmlFor="new-todo" />
        <TodoInput
          type="text"
          placeholder="Add to-do"
          value={name}
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
  margin-left: 5px;
  padding: 5px 10px 5px 10px;
  font-size: 20px;
  font-family: 'Patrick Hand', cursive;
  background-color: #FEF5ED;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  
  @media (min-width: 668px){ 
    margin-left: 10px;
  }
`

const TodoInput = styled.input`
  padding: 10px;
  font-size: 15px;


@media (min-width: 668px){ 
  width: 20vw;
  }
`
