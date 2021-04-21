import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaTrashAlt } from 'react-icons/fa';

import tasks from '../reducers/tasks'

const TodoList = () => {
  const items = useSelector((store) => store.tasks.items)

  const dispatch = useDispatch()

    return (
      <div>
        {items.map(task => (
          <div key={task.id} className="task-item">
            <p>{task.text}</p>
            <input
              type="checkbox"
              checked={task.complete}
              onChange={() => dispatch(tasks.actions.toggleComplete(task.id)) }
            />
            <button onClick={() => dispatch(tasks.actions.removeTask(task.id))}>
              <FaTrashAlt />
            </button>
          </div>
        ))}
      </div>
    )
}

export default TodoList;