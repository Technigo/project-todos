import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { todos } from '../reducers/todos'

const TodoListItem = styled.li`
list-style: none;
font-size: 20px;
`
const Checkbox = styled.input`

`
const ItemText = styled.span`
margin-left: 10px;
`

export const TodoItem = (props) => {
  const { id, text, complete } = props.task

  const dispatch = useDispatch()

  const handleOnChange = event => {
    dispatch(todos.actions.setComplete(id))
  }

  return (
    <TodoListItem>
      <input
        type='checkbox'
        checked={complete}
        onChange={handleOnChange}>
      </input>
      <ItemText>{text}</ItemText>
    </TodoListItem>
  )
}