import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { todos } from 'reducers/reducer'

const InputContainer = styled.div`
  border: 2px solid navy; 
  padding: 2em;
`
const RemoveButton = styled.button`
  border: 2px solid navy; 
  padding: .5em;
  cursor: pointer;
  margin-top: 1em;
`

export const TodoInput = ({todo}) => {
  const dispatch = useDispatch()
  const {task, setTask} = useState()


  const handleRemoveClick = () => {
    dispatch(
      todos.actions.removeAll()
    )
  }


    return (
      <InputContainer>
        Hello this is Todo input
        <input type="text"
        value={task}
        onChange={(event) => setTask(event.target.value)}
        ></input> 
        <button 
        type="submit"
        // onClick={() => dispatch(todos.actions.addTodo(todo))}
        >
        Add task</button>
        <RemoveButton type="submit" onClick={handleRemoveClick}>Remove All</RemoveButton>
      </InputContainer>
    )
  }