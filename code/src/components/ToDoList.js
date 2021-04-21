import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'

import todos from 'reducers/todos'

const ToDoList = () => {

  const tasks = useSelector((store) => store.todos.tasks)
  
  const dispatch = useDispatch()

    return(
      <div className='task-box'>
        {tasks.map(todo => (
          <div
            key={todo.id}
            className='single-task-box'>

            <label className='checkbox'>
              <input
                type='checkbox'
                checked={todo.isComplete}
                onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
              />
              <span className='checkmark'></span>
            </label>

            <div className='text-box'>
              <p className='plan'>
                {todo.description}
              </p>
              <p className='time'>
                {moment(todo.time).format('ddd HH:mm')}
              </p>
            </div>

            <button
              type='button'
              className='remove'
              onClick={() => dispatch(todos.actions.removeToDo(todo.id))}>
                X
            </button>

          </div>
        ))}
      </div>
    )
}

export default ToDoList