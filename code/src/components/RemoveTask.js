/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const RemoveTask = ({ onDeleteTaskItem, index }) => {
  return (
    <div>
      <button type="button" onClick={() => onDeleteTaskItem(index)}>X</button>
    </div>
  )
}

export default RemoveTask;

