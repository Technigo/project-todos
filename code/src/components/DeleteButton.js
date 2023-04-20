import React from 'react'
import { useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks'
import styled from 'styled-components/macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

const StyledButton = styled.button`
background-color: inherit;
border: none;
transition: color 0.2s ease-out;
cursor: pointer;

`
const DeleteButton = ({ id, completed }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(tasks.actions.deleteTask(id))
  }
  return (<StyledButton onClick={handleDelete}><FontAwesomeIcon icon={faX} style={{ color: `var(${completed ? '--background-color' : '--foreground-primary-color'})` }} /></StyledButton>);
}

export default DeleteButton;