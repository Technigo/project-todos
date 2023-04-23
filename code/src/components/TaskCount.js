import React from 'react';
import { useSelector } from 'react-redux';

const TaskCount = () => {
  const taskList = useSelector((store) => store.tasks.items)
  const completedTask = taskList.filter((task) => task.isCompleted === true)
  const notCompletedTask = taskList.filter((task) => task.isCompleted === false)

  return (
    <section className="task-count-container">
      <p className="task-count-text">
          Number of tasks: <span className="highlighted-number">{completedTask.length + notCompletedTask.length}</span>
      </p>
      <p className="task-count-text">
          Tasks left to complete: <span className="highlighted-number">{notCompletedTask.length}</span>
      </p>
      <p className="task-count-text">
          Completed tasks: <span className="highlighted-number">{completedTask.length}</span>
      </p>
    </section>
  )
}

export default TaskCount;