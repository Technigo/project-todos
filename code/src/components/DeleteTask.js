import React from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import todolist from 'reducers/todolist';
import styled from 'styled-components';

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
:hover {
    color: white;
    cursor: pointer;
}`

const DeleteTask = ({ singletask }) => {
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(todolist.actions.deleteSingleTask(id));
  }
  return (
    <div>
      <StyledFontAwesomeIcon icon={faTrashCan} onClick={() => onDelete(singletask.id)} />
    </div>
  )
}

export default DeleteTask;