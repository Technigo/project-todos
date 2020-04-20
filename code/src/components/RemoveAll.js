import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { todos } from '../reducers/todos'

export const RemoveAll = () => {
  const item = useSelector(store => store.todos.items)
  const dispatch = useDispatch()

  const onClick = () => dispatch(todos.actions.removeAll())

  return (

    <ClearAllButton onClick={onClick}>Clear all to do's!!!</ClearAllButton>

  )
}

const ClearAllButton = styled.button`
  display: flex;
  justify-content: center;
  height: 35px;
  padding: 8px;
  margin:8px;
  border: none;
  border-radius: 5px; 
  background: #f18666;
  color: #fff;
  font-weight:700;
  text-transform:uppercase;

&:hover: background: #ff9000;
  `