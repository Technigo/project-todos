import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import COLORS from './Colors'
import { ReactComponent as Delete } from '../resources/delete.svg'

// import Button from '@material-ui/core/Button'
// import { makeStyles } from '@material-ui/core/styles';

// import Checkbox from '@material-ui/core/Checkbox'
// import IconButton from '@material-ui/core/IconButton'
// import DeleteIcon from '@material-ui/icons/Delete'

import todos from '../reducers/todos'
// import './TodoList.css'

const TodoList = ({ items, complete }) => {
  // const items = useSelector((store) => store.todos.items)
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
            <Task for={todo.id}>
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
  min-height: 400px;
`

const TodoContainer = styled.div`
  display: flex;
  height: 44px;
  /* border: 1px solid pink; */
`

const Checkbox = styled.input`
  /* -webkit-appearance: none; */
  /* border: 2px solid black; */
  background: ${COLORS.lightGrey};
  border-radius: 4px;
  padding: 9px;
  align-self: center;
  cursor: pointer;
  height: 20px;
  width: 20px;
  box-shadow: 0 1px 2px ${COLORS.lightGrey};
  display: inline-block;
	position: relative;
  transition: all .2s ease;

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
  &:checked:after {
    /* content: '?'; */
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
    opacity: 1;
  }
  &:active {
    opacity: .1;
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
  /* display: flex; */
  color: ${COLORS.darkGrey};
  /* &.hover {
    border: blue;
    opacity: .1;
  } */
`


export default TodoList
