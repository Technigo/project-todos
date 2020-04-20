import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { tasks } from '../reducers/tasks'
import { ButtonStyle } from '../lib/Button'

import styled from 'styled-components'

export const TaskInput = () => {
  // change state from textinput
  const [inputValue, setInputValue] = useState("")
  // dispatch the actions to save our new task:
  const dispatch = useDispatch()

  // create handleSubmit function with dispatch:
  const handleOnSubmit = event => {
    // console.log if the value in the text field is there:
    console.log(inputValue)
    // prevent page from refreshing itself:
    event.preventDefault()
    // the dispatch function to save new task to store:
    dispatch(
      tasks.actions.addTodo({
        // listId: listId,
        itemInfo: { id: Date.now(), description: inputValue, done: false }
      })
    )
    // clear text field after Submit:
    setInputValue("")
  }

  // create a handle submit function
  return (
    <Container>
      <form className="todo-input" onSubmit={handleOnSubmit}>
        {/* <p>** hi im to do input** </p> */}
        <input 
          type="text"
          onChange={event => setInputValue(event.target.value)}
          value={inputValue}
          className="todo-input-text"
          // placeholder='Add here'
          required
        ></input>
        {/* <input
          type="submit"
          className="todo-input-button"
          value="Add Todo"
        ></input>  */}
          <ButtonStyle>Add</ButtonStyle>
        <input
          type="submit"
          className="todo-input-button"
          value="Add Todo"
        ></input> 
      </form>
    </Container>
  )
}

export const Container = styled.section`
  background: lightgrey;
`;

export const Form = styled.form`
  back
`;