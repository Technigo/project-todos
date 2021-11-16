import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import todo from '../reducers/todo'

const TodoList = () => {
  const items = useSelector((store) => store.todo.items)

  const dispatch = useDispatch()

  const onToggleTodo = (id) => {
    dispatch(todo.actions.toggleTodo(id))
  }

  // v1
  // const onDeleteTodoMutability = (index) => {
  // 	dispatch(todos.actions.deleteTodo(index));
  // };

  // v2
  const onDeleteTodoImmutability = (id) => {
    dispatch(todo.actions.deleteTodo(id))
  }

  return (
    <section>
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

            {/* // v1 */}
            {/* <button onClick={() => onDeleteTodoMutability(index)}>Delete</button> */}

            {/* // v2 */}
            <button
              className="delete-btn"
              onClick={() => onDeleteTodoImmutability(item.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </section>
  )
}

export default TodoList
