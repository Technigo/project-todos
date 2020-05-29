import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { todos } from '../reducers/reducer'
import { Button } from '../library/Button'

const InputContainer = styled.div`
  border: 2px solid navy; 
  padding: 2em;
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
        // onChange={(event) => setTask(event.target.value)}
        ></input> 
        <Button 
        type="button"
        // onClick={}
        disabled={task === ''}
        onClick={() => dispatch(todos.actions.addTodo(todo))}
        >
        Add task</Button>
        <Button type="submit" onClick={handleRemoveClick}>Remove All</Button>
      </InputContainer>
    )
  }