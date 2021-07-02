import React from 'react'
import { useSelector } from 'react-redux'

import { TodoItem } from './TodoItem'

const TodoList = () => {
  const items = useSelector((store) => store.todos.items)
  const notEmptyList = items.length > 0

  return (
    <>
    {notEmptyList ? (
      <div className="list-container">
      {items.map(todo => (
        < TodoItem 
          key={todo.id}
          todo = {todo}
        />
      ))}
    </div>
    ): (
      <div className="list-container">
        <h4>Anything to do today <span role="img" aria-label="emoji">🤷‍♀️</span> ?</h4>
      </div>
    )}
    </>
    
  )
}

export default TodoList