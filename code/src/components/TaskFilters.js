import React from 'react';
import { useDispatch } from 'react-redux';
import { clearAllTasks, filteredTasks } from 'reducers/tasks';

export const filters = {
  ALL: 'ALL',
  COMPLETED: 'COMPLETED',
  NOT_COMPLETED: 'NOT_COMPLETED'
}

const TaskFilters = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button type="button" onClick={() => dispatch(clearAllTasks())}>Clear All</button>
      <button type="button" onClick={() => dispatch(filteredTasks(filters.ALL))}>Show all tasks</button>
      <button type="button" onClick={() => dispatch(filteredTasks(filters.NOT_COMPLETED))}>Show to do tasks</button>
      <button type="button" onClick={() => dispatch(filteredTasks(filters.COMPLETED))}>Show Completed</button>
    </div>
  )
}
export default TaskFilters;