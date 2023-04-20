import React from 'react';
import { useDispatch } from 'react-redux';
import todolist from 'reducers/todolist';

const DeleteTask = ({ singletask }) => {
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(todolist.actions.deleteSingleTask(id));
  }
  return (
    <div>
      <button type="button" onClick={() => onDelete(singletask.id)}>Delete Task</button>
    </div>
  )
}

export default DeleteTask;