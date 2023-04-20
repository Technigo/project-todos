import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import tasks from '../reducers/tasks'

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items)

  const dispatch = useDispatch();

  const onToggleAllTask = (checked) => {
    dispatch(tasks.actions.onToggleAllTask(checked))
  }

  const onToggleTask = (id) => {
    dispatch(tasks.actions.onToggleTask(id))
  }

  const onRemoveTask = (id) => {
    dispatch(tasks.actions.removeTask(id))
  }

  const updateStatus = (id, value) => {
    dispatch(tasks.actions.changeStatus({ id, value }))
  }

  return (
    <>
      <thead>
        <tr>
          <th>
            <label htmlFor="checkbox">
              <input
                type="checkbox"
                id="checkbox"
                // test each element and return a boolean value
                checked={taskList.every((task) => task.isComplete)}
                onChange={(event) => onToggleAllTask(event.target.checked)} />
            </label>
          </th>
          <th>Task</th>
          <th>Status</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {taskList.map((task) => (
          <tr key={task.id}>
            <td>
              <label htmlFor="checkbox">
                <input
                  type="checkbox"
                  id="checkbox"
                  checked={task.isComplete}
                  onChange={() => onToggleTask(task.id)} />
              </label>
            </td>
            <td className={task.isComplete ? 'completed' : 'active'}>
              {task.text}
            </td>
            <td>
              <select
                value={task.status}
                onChange={(event) => {
                  updateStatus(task.id, event.target.value)
                }}>
                <option value="todo">Todo</option>
                <option value="in progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </td>
            <td>
              <button
                type="button"
                className="remove-button"
                onClick={() => onRemoveTask(task.id)}>
                <i className="fas fa-trash" />
              </button>
            </td>
          </tr>
        ))}
        {taskList.length === 0 ? (
          <tr>
            <td colSpan="4" className="empty-state">
              Add your first task above
            </td>
          </tr>
        ) : null}
      </tbody>
    </>
  )
}
export default TaskList;