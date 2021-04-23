import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
//useDispatch will allows to call the method we are ging to update our redux store with

//Importing the reducer that contains the action we are dispatching
import todos from '../reducers/todos'

const TodoList = () => {
//we name this variable "tasks" the same as the property in the store -line 6 in the Slice todos
//we select what we need from the store: the existing tasks  
  const tasks = useSelector((store) => store.todos.tasks)

//The instance of useDistpatch in every component is writen the same way
  const dispatch = useDispatch();
  
  return (
    <div className="todo-list-container">
      {tasks.map(todo => (
        <div key={todo.id}>
          <p>{todo.description}</p>
          <input
            className="checkbox"
            type="checkbox"
            checked={todo.isComplete}
            onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
         //onChange contains the action we are going to dispatch when we check a task as complete
          />
          <button className="remove-todo-btn" onClick={() => dispatch(todos.actions.removeTodo(todo.id))}>
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default TodoList