import React from 'react';
import { useSelector } from 'react-redux';

const TaskCount = () => {
  const taskList = useSelector((store) => store.tasks.items)
  const completedTask = taskList.filter((task) => task.isCompleted === true)
  const notCompletedTask = taskList.filter((task) => task.isCompleted === false)

  return (
    <section className="task-count-container">
      <p className="task-count-text">
          Number of tasks: {completedTask.length + notCompletedTask.length}
      </p>
      <p className="task-count-text">
          Tasks left to complete: {notCompletedTask.length}
      </p>
      <p className="task-count-text">
          Completed tasks: {completedTask.length}
      </p>
    </section>
  )
}

export default TaskCount;