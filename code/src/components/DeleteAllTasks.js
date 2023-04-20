import React from 'react';
import { useDispatch } from 'react-redux';
import todolist from 'reducers/todolist';
import styled from 'styled-components';
import { DeleteButton } from '../styles/Buttons'

const DeleteButtonDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const DeleteAllTasks = () => {
  const dispatch = useDispatch();
  const deleteAll = () => {
    dispatch(todolist.actions.deleteAllTasks());
  }

  return (
    <DeleteButtonDiv>
      <DeleteButton type="button" onClick={deleteAll}>Delete All</DeleteButton>
    </DeleteButtonDiv>
  )
}

export default DeleteAllTasks;