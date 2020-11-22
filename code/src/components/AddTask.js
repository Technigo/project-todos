import React from 'react';
import { useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';

const AddTask = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <input type='text'></input>
      <button onClick={() => dispatch(tasks.actions.addTask())}>Submit</button>
    </div>
  )
};

export default AddTask;