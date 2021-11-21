import React from "react"
import { useDispatch, useSelector } from "react-redux"

import moment from "moment"

import { CheckboxStyled } from "styling/checkbox"

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
      {items.length === 0 ? (
        <div className="img-done-container">
          <p>All completed</p>
          <img className="img-done" src="./done.svg" alt="checked icon"></img>
        </div>
      ) : (
        <>
          <p className="label">To do</p>
          {items.map((item, index) => (
            <>
              <div
                className={
                  item.isComplete ? "item-container-checked" : "item-container"
                }
                key={item.id}
              >
                <CheckboxStyled
                  // className="checkbox"
                  type="checkbox"
                  checked={item.isComplete}
                  onChange={() => onToggleTodo(item.id)}
                ></CheckboxStyled>
                <div className="list-input-text">
                  <p className="todo-text">{item.text}</p>

                  <p className="date">
                    Created at {moment(item.time).fromNow()}
                  </p>
                </div>

                <button
                  className="delete-btn"
                  onClick={() => onDeleteTodoImmutability(item.id)}
                >
                  <img
                    className="img-bin"
                    src="./bin.svg"
                    alt="delete bin"
                  ></img>
                </button>
              </div>
            </>
          ))}
          <div>
            <p className="label">Completed to dos</p>
            {filteredIsComplete.map(isCompleteItem => (
              <>
                <div className={"item-checked"} key={isCompleteItem.id}>
                  <CheckboxStyled
                    type="checkbox"
                    checked={isCompleteItem.isComplete}
                    onChange={() => onToggleTodo(isCompleteItem.id)}
                  ></CheckboxStyled>
                  <div className="list-input-text">
                    <p className="todo-text">{isCompleteItem.text}</p>

                    <p className="date">
                      Created at{" "}
                      {moment(isCompleteItem.time).format("MMMM Do YYYY, h:mm")}
                    </p>
                  </div>

                  <button
                    className="delete-btn"
                    onClick={() => onDeleteTodoImmutability(isCompleteItem.id)}
                  >
                    <img
                      className="img-bin"
                      src="./bin.svg"
                      alt="delete bin"
                    ></img>
                  </button>
                </div>
              </>
            ))}
          </div>
        </>
      )}
    </section>
  )
}

export default TodoList
