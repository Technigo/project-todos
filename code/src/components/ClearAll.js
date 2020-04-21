import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { todos } from '../reducers/todos'

export const ClearAll = () => {
  const items = useSelector(store => store.todos.items)
  const dispatch = useDispatch()

  const onClick = () => dispatch(todos.actions.clearAll())

  return (
    <>
      {items.length > 0 &&
        <ClearAllButton onClick={onClick}>Clear all</ClearAllButton>
      }
    </>
  )
}

const ClearAllButton = styled.button`
  width: 90%;
  height: 40px;
  margin: 5px auto;
  padding: 0 8px;
  border: none;
  border-radius: 10px; 
  background: #888d64;
  color: #fff;
  font-family: 'Playfair Display';
  font-size: 1em;

  @media (min-width: 768px) {
    font-size: 1.2em;
  }
`