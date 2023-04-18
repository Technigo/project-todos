import React from 'react'
import { useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks'
import styled from 'styled-components'

const StyledButton = styled.button`
background-color: red;
width: 15px;
height: 15px;`

const DeleteButton = ({ id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(tasks.actions.deleteTask(id))
  }
  return (<StyledButton text="x" onClick={handleDelete} />);
}

export default DeleteButton;