import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';

const TaskCount = () => {
  const taskList = useSelector((store) => store.tasks.items)
  const completedTask = taskList.filter((task) => task.isCompleted === true)
  const notCompletedTask = taskList.filter((task) => task.isCompleted === false)
  const dispatch = useDispatch()

  const onDeleteAllTasksBtnClick = (id) => {
    dispatch(tasks.actions.removeAllTasks(id))
  }

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
      <p className="task-count-text">
        <button className="delete-all-tasks-button" type="button" onClick={() => onDeleteAllTasksBtnClick()}>Delete all</button>
      </p>
    </section>
  )
}

export default TaskCount;