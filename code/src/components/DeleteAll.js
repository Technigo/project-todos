import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

export const DeleteButton = styled.button`
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
    content: 'delete All';
    }
`

export const DeleteAll = () => {
  const dispatch = useDispatch();

  const deleteAllOnClick = () => {
    dispatch(tasks.actions.clearAllItems());
  }

  return (
    <DeleteButton type="button" onClick={deleteAllOnClick}><FontAwesomeIcon icon={faTrashCan} size="xl" /></DeleteButton>
  );
}