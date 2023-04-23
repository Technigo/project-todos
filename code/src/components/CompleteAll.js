import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'

export const CompleteButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #f85f36;
  font-weight: 900;

  &:hover:after {
    content: 'check all';
    }
`

export const CompleteAll = () => {
  const dispatch = useDispatch();

  const completeAllOnClick = () => {
    dispatch(tasks.actions.allCompleteItem(true));
  }

  return (
    <CompleteButton type="button" onClick={completeAllOnClick}><FontAwesomeIcon icon={faCalendarCheck} size="xl" /></CompleteButton>
  );
}
