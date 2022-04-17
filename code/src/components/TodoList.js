import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import todos from 'reducer/todos'

const TodoList = () => {
  const todoList = useSelector((store) => store.todos.items)

  const dispatch = useDispatch()

  const onTodoToggle = (todoId) => {
    dispatch(todos.actions.toggleItem(todoId))
  }

  const onTodoDelete = (index) => {
    dispatch(todos.actions.deleteItem(index))
  }

  return (
    <article className="todo-list">
      {todoList.map((todoItem, todoIndex) => (
        <div className="todo-box" key={todoItem.id}>
          <h4 className="todo-item">{todoItem.Todo}</h4>
          <label className="need-todo">
            Needs Todo:&nbsp;
            <input
              type="checkbox"
              checked={todoItem.isDone}
              onChange={() => onTodoToggle(todoItem.id)}
            />
          </label>
          <button
            className="delete-btn"
            onClick={() => onTodoDelete(todoIndex)}
          >
            Delete
          </button>
        </div>
      ))}
    </article>
  )
}

export default TodoList
