import React from 'react'
import { useDispatch } from 'react-redux';
import { InnerWrapper, Btn } from '../utils/GlobalStyle'
import tasks from '../reducers/tasks'

const DeleteAllBtn = () => {
  const dispatch = useDispatch();

  // Function to delete all tasks
  const handleDeleteAllTasks = () => {
    dispatch(tasks.actions.deleteAllTasks());
  }

  return (
    <InnerWrapper>
      <Btn type="button" onClick={handleDeleteAllTasks}>remove all</Btn>
    </InnerWrapper>

  )
}

export default DeleteAllBtn