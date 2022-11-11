/* eslint-disable linebreak-style */
import React from 'react';
import tasks from 'reducers/task';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

const DeleteAllTasks = () => {
  const dispatch = useDispatch()

  const RemoveAllTasks = () => {
    dispatch(tasks.actions.deleteAllItems())
  }
  return (
    <RemoveAll
      onClick={RemoveAllTasks}
      type="button"> Delete All
    </RemoveAll>
  )
}

export default DeleteAllTasks

const RemoveAll = styled.button`
padding: 5px;
width: 60px;
border-radius: 20%;
border: 2px solid #F63F41;
font-size: 14px;
display: flex;
justifly-content: center;
align-items: center;
`