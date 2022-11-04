import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import tasks from '../reducers/todos'

const Header = () => {
  const dispatch = useDispatch();
  // Show total number of items in task-list
  const taskList = useSelector((store) => store.tasks.items);
  // Show number of completed items in task-list
  const completedTasks = taskList.filter((task) => task.isCompleted);

  const handleDeleteAllTasks = () => {
    dispatch(tasks.actions.deleteAllTasks());
  }
  return (
    <div>
      <h1>Daily Tasks</h1>
      <p>Completed tasks:{' '}
        {completedTasks.length} / {taskList.length}
      </p>
      <button type="button" onClick={handleDeleteAllTasks}>remove all</button>
    </div>
  )
}

export default Header

