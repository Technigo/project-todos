import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import todos from '../reducers/todos'

const ToDos = () => {
  const tasks = useSelector((state) => state.todos.items)
  const dispatch = useDispatch()

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <label
            >{task.task}
            <input type='checkbox'></input>
          </label>
          <button onClick={() => dispatch(todos.actions.removeToDo(task.id))}>Remove</button>
        </div>
      ))}
    </div>
  )
}

export default ToDos
