import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import todos from 'reducers/todos'

const ToDoList = () => {

    const tasks = useSelector((store) => store.todos.tasks)

    const dispatch = useDispatch()

    return(
        <div className='task-box'>
            {tasks.map(todo => (
                <div key={todo.id}
                className='single-task-box'>
                  <label className='checkbox'>
                  <input
                    type='checkbox'
                    checked={todo.isComplete}
                    onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
                    />
                    <span className='checkmark'>
                    </span>
                  </label>
                  <p>{todo.description}</p>
                </div>
            ))}
        </div>
    )
}

export default ToDoList