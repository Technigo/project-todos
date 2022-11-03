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
    clear list
    </ClearListBtn>
  )
}

const ClearListBtn = styled.button`
  background-color: yellow;
`;