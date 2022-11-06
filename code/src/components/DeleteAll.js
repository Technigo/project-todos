import React from 'react'
import { useDispatch } from 'react-redux'

import styled from 'styled-components'
import { AddStartIcon, StartBtn } from 'GlobalStyle'
// Reducer
import todo from 'reducers/todo'

import deleteAllBtn from '../assets/trashcan_icon.png'

export const DeleteAll = () => {
  const dispatch = useDispatch()

  const onDeleteAll = () => {
    // window.confirm('are you sure?') ? console.log('yes') : null
    dispatch(todo.actions.deleteAll())
  }

  return (
    <DeleteAllBtn onClick={onDeleteAll}>
      <DeleteALlIcon src={deleteAllBtn} alt="All todos done" />
    </DeleteAllBtn>
  )
}

// ---------Styled Components------

const DeleteAllBtn = styled(StartBtn)`
  border: 2px solir red;
`;

const DeleteALlIcon = styled(AddStartIcon)`
  border: none;
  padding: 0.4em 1em;
  margin-left: 0.5em;
  margin-top: 0.5em;
  width: 70px;

  &:hover {
    transform: scale(1.2);
    transition: all 0.3s ease-in;
  }
`;