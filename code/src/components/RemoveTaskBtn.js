import React from 'react'
import { useDispatch } from 'react-redux'

import todos from 'reducers/todos'


export const RemoveTaskBtn = (props) => {  
  const dispatch = useDispatch()

return (
  <div className="grid-item-3">
    <button
      className="remove-todo-btn"
      onClick={() => dispatch(todos.actions.removeTodo(props.todo.id))}>
        <span className="delete-icon" role="img" aria-label="X sign">❌</span>
    </button>
</div>
)
}