import React from 'react'
import { useDispatch } from 'react-redux' //because we will have a action
import { tasks } from 'reducers/tasks'
import styled from 'styled-components/macro'

export const ClearButton = () => {
  const dispatch = useDispatch()

  return (
    <ClearAll type="button" onClick={() => dispatch(tasks.actions.removeAll())}>
      Clear all
    </ClearAll>
  )
}


const ClearAll = styled.button`
text-align: center;
  background: transparent;
  color: #000;
  border: 3px solid #e5e5e5;
  padding: 5px;
  margin: 5px;
  border-radius: 10px;
  text-transform: uppercase;
  &:hover {
    background: white;
    cursor: pointer;
  }
`