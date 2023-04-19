import React from 'react';

const TaskDate = ({ date }) => {
  if (!date) {
    return null;
  }
  return <p>{date.toLocalDateString()}</p>
}

export default TaskDate;