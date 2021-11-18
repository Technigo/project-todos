import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import todo from '../reducers/todo'

const TodoList = () => {
  const items = useSelector((store) => store.todo.items)

  const dispatch = useDispatch()

  const onToggleTodo = (id) => {
    dispatch(todo.actions.toggleTodo(id))
  }

  // Immutability approach
  const onDeleteTodoImmutability = (id) => {
    dispatch(todo.actions.deleteTodo(id))
  }

  return (
    <section className="todo-list-section">
      {items.map((item, index) => (
        <div className="flex-item" key={item.id}>
          <p className="todo-text">{item.text}</p>

          <div className="verify-container">
            <input
              className="checkbox"
              type="checkbox"
              checked={item.isComplete}
              onChange={() => onToggleTodo(item.id)}
            />

            {/* // v2 */}
            <button
              className="delete-btn"
              onClick={() => onDeleteTodoImmutability(item.id)}
            >
              Clear
            </button>
          </div>
        </div>
      ))}
    </section>
  )
}

export default TodoList
