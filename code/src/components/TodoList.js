import React from "react"
import { useDispatch, useSelector } from "react-redux"
import DayJS from "react-dayjs"

import todos from "../reducers/todos"

const TodoList = () => {
  const dispatch = useDispatch()
  const items = useSelector(store => store.todos.items)

  const onToggleTodo = id => {
    dispatch(todos.actions.toggleTodo(id))
  }

  const onDeleteTodoImmutability = id => {
    dispatch(todos.actions.deleteTodo(id))
    console.log("onDeleteTodoTim")
  }

  const filteredIsComplete = items.filter(item => item.isComplete)
  console.log("isCompleteItem", filteredIsComplete)

  return (
    <section className="list-container">
      {items.map((item, index) => (
        <>
          <div
            className={
              item.isComplete ? "item-container-checked" : "item-container"
            }
            key={item.id}
          >
            <input
              type="checkbox"
              checked={item.isComplete}
              onChange={() => onToggleTodo(item.id)}
            ></input>
            <div className="list-input-text">
              <p className="todo-text">{item.text}</p>

              <p className="date">
                Created at -<DayJS element="span" format="MMM D, YYYY H:mm" />
              </p>
            </div>

            <button
              className="delete-btn"
              onClick={() => onDeleteTodoImmutability(item.id)}
            >
              &otimes;
            </button>
          </div>
        </>
      ))}
      <div>
        {filteredIsComplete.map(isCompleteItem => (
          <>
            <div className={"item-checked"} key={isCompleteItem.id}>
              <input
                type="checkbox"
                checked={isCompleteItem.isComplete}
                onChange={() => onToggleTodo(isCompleteItem.id)}
              ></input>
              <div className="list-input-text">
                <p className="todo-text">{isCompleteItem.text}</p>

                <p className="date">
                  Created at -<DayJS element="span" format="MMM D, YYYY H:mm" />
                </p>
              </div>

              <button
                className="delete-btn"
                onClick={() => onDeleteTodoImmutability(isCompleteItem.id)}
              >
                &otimes;
              </button>
            </div>
          </>
        ))}
      </div>
    </section>
  )
}

export default TodoList
