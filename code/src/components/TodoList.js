import React from "react"
import DayJS from "react-dayjs"
import { useSelector, useDispatch } from "react-redux"
// import styled from "styled-components"

import todos from "../reducers/todos"

// const Wastecan = styled.img`
//   width: 25px;
// `

const TodoList = () => {
  const items = useSelector((store) => store.todos.items)

  const dispatch = useDispatch()

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id))
  }

  const onDeleteTodoImmutability = (id) => {
    dispatch(todos.actions.deleteTodo(id))
  }

  return (
    <section className="todo-list-container">
      {items.map((item, index) => (
        <div className="flex-item" key={item.id}>
          <div className="check-button">
            <input
              className="checkbox"
              type="checkbox"
              checked={item.isComplete}
              onChange={() => onToggleTodo(item.id)}
            />
            <p
              className="item-text"
              style={{ textDecoration: item.isComplete ? "line-through" : "" }}
            >
              {item.text}
            </p>
          </div>

          {/* <span> Created</span> */}
          <DayJS element="span" format="MMM D, YYYY H:mm" />

          <button
            className="delete-button"
            onClick={() => onDeleteTodoImmutability(item.id)}
          >
            {/* <Wastecan src="./assets/wastecan.svg" /> */}-
          </button>
        </div>
      ))}
    </section>
  )
}

export default TodoList
