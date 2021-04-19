import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import todos from '../reducers/todos'

const TodoList = () => {
  const tasks = useSelector(store => store.todos.tasks)

  const dispatch = useDispatch()

  return (
    <div>
      {tasks.map(task => (
        <div>
          <input
            type="checkbox"
            checked={task.isComplete}
            onChange={() => dispatch(todos.actions.toggleComplete(task.id))}
          />
          <span key={task.id}>{task.description}</span>
        </div>
      ))}
    </div>
  )
}

export default TodoList