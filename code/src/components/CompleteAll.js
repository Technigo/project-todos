import React from 'react'
import { useDispatch } from 'react-redux'
// Reducer
import todo from 'reducers/todo'

import styled from 'styled-components/macro'
import { AddStartIcon, StartBtn } from 'GlobalStyle'
import allDoneBtn from '../assets/allDone_icon.png'

export const CompleteAll = () => {
  const dispatch = useDispatch()

  const onCompleteAll = () => {
    dispatch(todo.actions.completeAll())
  }

  return (
    <AllDoneBtn onClick={onCompleteAll}>
      <AllDoneIcon src={allDoneBtn} alt="All todos done" />
    </AllDoneBtn>
  )
}

// Styled Components

const AllDoneBtn = styled(StartBtn)`
  
`;

const AllDoneIcon = styled(AddStartIcon)`
  padding: 1em 0 1em 0.4em;
  border: none;
  width: 70px;
  

  &:hover {
    transform: scale(1.2);
    transition: all 0.3s ease-in;
  }
`;