import React from 'react'
import { useDispatch } from 'react-redux'

import styled from 'styled-components'
import { AddStartIcon, StartBtn } from 'GlobalStyle'
import allDoneBtn from '../assets/allDone_icon.png'

// Reducer
import todo from '../reducers/todo'

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
  border: 2px solir red;
`;

const AllDoneIcon = styled(AddStartIcon)`
  border: none;
  width: 70px;

  &:hover {
    transform: scale(1.2);
    transition: all 0.3s ease-in;
  }
`;