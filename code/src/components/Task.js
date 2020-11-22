import React from 'react';

const Task = ({ task }) => {
  return (
    <div>
      {task.id}{task.text}
    </div>
  )
}

export default Task;