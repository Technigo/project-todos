import React from 'react';
import { useSelector } from 'react-redux';

const TaskCounter = () => {
  const tasks = useSelector((state) => state.tasks)

  const uncompleateCount = tasks.filter((task) => !task.compleate).length

  return (
    <div>
      <p>Uncompleated tasks: {uncompleateCount}</p>
    </div>
  )
}

export default TaskCounter