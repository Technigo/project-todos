import React from 'react'
import { useDispatch } from 'react-redux'
import todos from 'reducers/todos'
import styled from 'styled-components'

export const ClearListButton = () => {
  const dispatch = useDispatch()

  return (
    <ClearListBtn
      type="button"
      onClick={() => {
        dispatch(todos.actions.clearList())
      }}>
    Clear list
    </ClearListBtn>
  )
}

const ClearListBtn = styled.button`
  height: 2rem;
  width: 5rem;
  border: solid var(--primary);
  border-radius: 5px;
  background: #fff;
  color: var(--primary);
  font-weight: 700;
  pointer: cursor;
 
  &:hover{
    cursor: pointer;
    border: solid var(--secondary);
    color: var(--secondary);
  }

  @media (min-width: 1024px) { 
    height: 3rem;
    width: 6rem; 
  }


`;