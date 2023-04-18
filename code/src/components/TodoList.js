import React from 'react';
import { useDispatch } from 'react-redux';
import todos from 'reducers/todo';
import styled from 'styled-components'

export const TodoList = ({ todo }) => {
  const dispatch = useDispatch()
  return (
    <div className="todo-wrapper">
      <input
        type="checkbox"
        onCheck={() => dispatch(todos.action.addItem(todo))}
        id=""
        name="todos" />
      <DeleteButton>Button</DeleteButton>
    </div>
  )
}

const DeleteButton = styled.button`
position:absolute;
top:10px;
right: 10px;
background:none;
border:none;
cursor:pointer;
`