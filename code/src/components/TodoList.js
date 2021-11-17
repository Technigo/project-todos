import React from "react"
import { useDispatch, useSelector } from "react-redux"
import DayJS from "react-dayjs"
// import moment from "moment"

import todos from "../reducers/todos"

const TodoList = () => {
  const dispatch = useDispatch()
  const items = useSelector(store => store.todos.items)

  const onToggleTodo = id => {
    dispatch(todos.actions.toggleTodo(id))
  }
  // v1 onDeleteTodoMutability
  //   const onDeleteTodoMutability = index => {
  //     dispatch(todos.actions.deleteTodo(index))
  //   }

  const onDeleteTodoImmutability = id => {
    dispatch(todos.actions.deleteTodo(id))
    console.log("onDeleteTodoTim")
  }

  return (
    <section className="list-container">
      {items.map((item, index) => (
        <div
          className={
            item.isComplete ? "item-container-checked" : "item-container"
          }
          key={item.id}
        >
          <div className="text-and-check-container">
            <input
              type="checkbox"
              checked={item.isComplete}
              onChange={() => onToggleTodo(item.id)}
            ></input>
            <p className="list-input-text">{item.text}</p>
          </div>

          <p>
            Created at -<DayJS element="span" format="MMM D, YYYY H:mm" />
          </p>

          {/* v1
          <button onClick={() => onDeleteTodoImmutability(index)}>Delete</button>
          v2 */}

          <button
            className="delete-btn"
            onClick={() => onDeleteTodoImmutability(item.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </section>
  )
}

export default TodoList
