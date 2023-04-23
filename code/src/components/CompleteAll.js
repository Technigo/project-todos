import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import { CompleteButton } from './style/GlobalStyle';

export const CompleteAll = () => {
  const dispatch = useDispatch();

  const completeAllOnClick = () => {
    dispatch(tasks.actions.allCompleteItem(true));
  }

  return (
    <CompleteButton type="button" onClick={completeAllOnClick}><FontAwesomeIcon icon={faCalendarCheck} size="xl" /></CompleteButton>
  );
}
