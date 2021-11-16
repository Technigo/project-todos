import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import moment from 'moment'

import todos from '../reducers/todos'

const ToDos = () => {
  const tasks = useSelector((state) => state.todos.items)
  const dispatch = useDispatch()

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <label>
            <input 
              type='checkbox' 
              onChange={() => dispatch(todos.actions.toggleIsComplete(task.id))}
            />{task.task}
          </label>
          <button onClick={() => dispatch(todos.actions.removeToDo(task.id))}>Remove</button>
          <p>Created at: {moment().format("MMM Do YY")}</p>
        </div>
      ))}
    </div>
  )
}

export default ToDos
