import React from 'react'
import { useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks'

const CheckBox = ({ id }) => {
  const dispatch = useDispatch();
  const checkComplete = () => {
    dispatch(tasks.actions.toggleTask(id))
  }
  return (

    <input type="checkbox" text="completed?" onClick={checkComplete} />
  );
}

export default CheckBox;