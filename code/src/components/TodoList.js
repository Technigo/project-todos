import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import todos from '../reducers/todos'
import { ReactComponent as Delete } from '../resources/delete.svg'
import COLORS from './Colors'

const TodoList = ({ items, complete }) => {
  const dispatch = useDispatch()

  return (
    <Wrapper>
      {items.map(todo => (
        todo.isComplete === complete && 
          <TodoContainer key={todo.id}>
            <Checkbox
              id={todo.id}
              type="checkbox"
              checked={todo.isComplete}
              onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}/>
            <Task htmlFor={todo.id}>
              {todo.description}
            </Task>

            <IconButton onClick={() => dispatch(todos.actions.removeTodo(todo.id))}>
              <Delete />
            </IconButton>
          </TodoContainer>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 300px;
`

const TodoContainer = styled.div`
  display: flex;
  height: 44px;
`

// There is some commented stuff below, i plan to come back to this when i figure out
// how to override checkbox styling with styled components
const Checkbox = styled.input`
  /* -webkit-appearance: none; */
  height: 20px;
  width: 20px;
  align-self: center;
  cursor: pointer;
  box-shadow: 0 1px 2px ${COLORS.lightGrey};
  /* background: ${COLORS.lightGrey}; */
  /* border-radius: 4px; */
  /* padding: 9px; */
	/* position: relative; */
  /* transition: all .2s ease; */

  &:hover {
    background: ${COLORS.midGrey};
  }
  &:active {
    background: red;
  }
  &:checked {
    background: green;
    color: white;
  }
  &:checked:after { // This is the thing that did not work at all. Why?
    content: '\2714';
    font-size: 14px;
    position: absolute;
    top: 0px;
    left: 3px;
    color: #99a1a7;  
  }
  `

const IconButton = styled.a`
  align-self: center;
  opacity: .6;
  &:hover {
    border: blue;
    opacity: .4;
  }
  &:active {
    opacity: 1;
  }

  `

const Task = styled.label`
  display: flex;
  align-self: center;
  margin-left: 16px;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  font-size: 16px;
  font-weight: 400;
  color: ${COLORS.darkGrey};
`

export default TodoList
