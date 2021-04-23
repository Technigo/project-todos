import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


import todos from '../reducers/todos'
import TodoForm from './TodoForm'
import Counter from './Counter'

const TodoList = () => {
  
  const tasks = useSelector((store) => store.todos.tasks)
  const dispatch = useDispatch()

  return (
    <main className="main-wrapper">
      <div className="top-content-container">
        <div className="circle"></div>
        <div className="counter-wrapper">
          <Counter/>
        </div>  
      </div>
      <TodoForm />
      <div className="todo-list-wrapper">
      {tasks.map(task => (
        <div className="todo-wrapper" key={task.id}>
          <input
            type="checkbox"
            checked={task.isComplete}
            onChange={() => dispatch(todos.actions.toggleComplete(task.id))}
          />
          <h2>{task.description}</h2>
          <button onClick={() => dispatch(todos.actions.removeTask(task.id))}>
            delete
          </button>
        </div>
        
      ))}
      </div>
    </main>
  )

}


export default TodoList