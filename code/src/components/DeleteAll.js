import React from 'react'
import { useDispatch } from 'react-redux'

import styled from 'styled-components/macro'
import { AddStartIcon, StartBtn } from 'GlobalStyle'
// Reducer
import todo from 'reducers/todo'

import deleteAllBtn from '../assets/deleteAll_icon.png'

export const DeleteAll = () => {
  const dispatch = useDispatch()

  const onDeleteAll = () => {
    // window.confirm('are you sure?') ? console.log('yes') : null
    dispatch(todo.actions.deleteAll())
  }

  return (
    <DeleteAllBtn onClick={onDeleteAll}>
      <DeleteALlIcon src={deleteAllBtn} alt="Delete all todos" />
    </DeleteAllBtn>
  )
}

// ---------Styled Components------

const DeleteAllBtn = styled(StartBtn)`
  
`;

const DeleteALlIcon = styled(AddStartIcon)`
padding: 1em 0 1em 0em;
  border: none;
  width: 70px;
  

  &:hover {
    transform: scale(1.2);
    transition: all 0.3s ease-in;
  }
`;