import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import todos from '../reducers/todos'

const TodoList = () => {
  const tasks = useSelector((store) => store.todos.tasks) //hook to get things out of the store , specify from where
  
  const dispatch = useDispatch()  

  return (
    <div>
     {tasks.map(todo => (
       <div key={todo.id}>
         <p>{todo.description}</p>
         <input
          type='checkbox'
          checked={todo.isComplete}
          onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
         />
        </div>
     ))}
    </div>
  )
}

export default TodoList