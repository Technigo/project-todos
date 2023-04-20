import React from 'react';
import { useDispatch } from 'react-redux';
import todolist from 'reducers/todolist';

const DeleteAllTasks = () => {
  const dispatch = useDispatch();
  const deleteAll = () => {
    dispatch(todolist.actions.deleteAllTasks());
  }

  return (
    <div>
      <button type="button" onClick={deleteAll}>Delete All</button>
    </div>
  )
}

export default DeleteAllTasks;