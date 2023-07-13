import React from 'react';

const TaskDate = ({ date }) => {
  if (!date) {
    return null;
  }
  return <p>{date.toLocaleDateString()}</p>
}

export default TaskDate;