import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import todo from '../reducers/todo'


const TodoList = () => {
  const items = useSelector((store) => store.todo.items)

  const dispatch = useDispatch()

  const onToggleTodo = (id) => {
    dispatch(todo.actions.toggleTodo(id))
  }

  const onDeleteTodo = (id) => {
    dispatch(todo.actions.deleteTodo(id))
  }

  return (
    <section className="todos-list">
      {items.map((item, index) => (
        <div className="flex-item" key={item.id}>
           <input
              className="checkbox"
              type="checkbox"
              checked={item.isComplete}
              onChange={() => onToggleTodo(item.id)}
            />
          <p className="todo-input">{item.text}</p>

          <div className="delete-container">
           
            <button
              className="delete-button"
              onClick={() => onDeleteTodo(item.id)}
            >
              Delete Todo
            </button>
          </div>
        </div>
      ))}
    </section>
  )
}

export default TodoList
