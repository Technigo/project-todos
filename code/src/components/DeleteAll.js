import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { DeleteAllButton } from './style/GlobalStyle';

export const DeleteAll = () => {
  const dispatch = useDispatch();

  const deleteAllOnClick = () => {
    dispatch(tasks.actions.clearAllItems());
  }

  return (
    <DeleteAllButton type="button" onClick={deleteAllOnClick}><FontAwesomeIcon icon={faTrashCan} size="xl" /></DeleteAllButton>
  );
}