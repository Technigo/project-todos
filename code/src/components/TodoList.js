import React from "react"
import { useDispatch, useSelector } from "react-redux"

import moment from "moment"

import { CheckboxStyled } from "styling/checkbox"
import Svg from "svg"

import todos from "../reducers/todos"

const TodoList = () => {
  const dispatch = useDispatch()
  const items = useSelector(store => store.todos.items)

  const onToggleTodo = id => {
    dispatch(todos.actions.toggleTodo(id))
  }

  const onDeleteTodoImmutability = id => {
    dispatch(todos.actions.deleteTodo(id))
  }

  const filteredIsComplete = items.filter(item => item.isComplete)
  const filteredNotComplete = items.filter(item => !item.isComplete)

  return (
    <section className="list-container">
      {items.length === 0 ? (
        <div className="img-done-container">
          <p>All completed</p>
          <Svg />
        </div>
      ) : (
        <>
          <p className="label">To do</p>
          {filteredNotComplete.map((item, index) => (
            <>
              <div
                style={{
                  backgroundImage: `linear-gradient(72deg, var(--background), ${item.color[index]})`,
                }}
                className="item-container"
                key={item.id}
              >
                <CheckboxStyled
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
            {filteredIsComplete.map((isCompleteItem, index) => (
              <>
                <div
                  style={{
                    backgroundImage: `linear-gradient(72deg, var(--background), ${isCompleteItem.color[index]})`,
                  }}
                  className={"item-checked"}
                  key={isCompleteItem.id}
                >
                  <CheckboxStyled
                    type="checkbox"
                    checked={isCompleteItem.isComplete}
                    onChange={() => onToggleTodo(isCompleteItem.id)}
                  ></CheckboxStyled>
                  <div className="list-input-text">
                    <p className="todo-text">{isCompleteItem.text}</p>

                    <p className="date">
                      Created at{" "}
                      {moment(isCompleteItem.time).format("MMMM Do YYYY, H:mm")}
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
