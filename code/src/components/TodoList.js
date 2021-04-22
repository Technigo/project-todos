import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


import todos from '../reducers/todos'
import TodoForm from './TodoForm'

const TodoList = () => {
  const tasks = useSelector((store) => store.todos.tasks)
  const dispatch = useDispatch()

  return (
    <section>
      <div className="circle"></div>
      <div className="h2-wrapper">
        <h2>DAILY TO DO ROUTINE</h2>
      </div>  
      <TodoForm />
      {tasks.map(task => (
        <div key={task.id}>
          <h2>{task.description}</h2>
          <input
            type="checkbox"
            checked={task.isComplete}
            onChange={() => dispatch(todos.actions.toggleComplete(task.id))}
          />
          <button onClick={() => dispatch(todos.actions.removeTask(task.id))}>
            Delete
          </button>
        </div>
      ))}
    </section>
  )

}


export default TodoList