import React from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import todolist from 'reducers/todolist';
import styled, { keyframes } from 'styled-components';

const wobble = keyframes`
  0% { transform: scale3d(1, 1, 1); }
  30% { transform: scale3d(1.25, 0.75, 1); }
  40% { transform: scale3d(0.75, 1.25, 1); }
  50% { transform: scale3d(1.15, 0.85, 1); }
  65% { transform: scale3d(0.95, 1.05, 1); }
  75% { transform: scale3d(1.05, 0.95, 1); }
  100% { transform: scale3d(1, 1, 1); }
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
color: white;

:hover {
    cursor: pointer;
    animation: ${wobble} 1.3s;
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