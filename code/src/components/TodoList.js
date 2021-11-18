import React from "react"
import DayJS from "react-dayjs"
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components"

import todos from "../reducers/todos"

const CreatedTime = styled.div`
  display: flex;
  align-items: center;
`

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
          <CreatedTime>
            <DayJS
              style={{ padding: "5px" }}
              element="span"
              format="MMM D, YYYY H:mm"
            />

            <button
              className="delete-button"
              onClick={() => onDeleteTodoImmutability(item.id)}
            >
              {/* <Wastecan src="./assets/wastecan.svg" /> */}-
            </button>
          </CreatedTime>
        </div>
      ))}
    </section>
  )
}

export default TodoList
