import React from 'react';
import { useSelector } from 'react-redux';
import { TodosList } from './TodosList';

export const Counter = () => {  
  const todos = useSelector(state => state.todos.items)
  const leftTodo = todos.filter(todo => todo.complete === false)

  return(
    <div> 
      <p>{leftTodo.length} of {todos.length} left to do</p>
    </div>

  )


}