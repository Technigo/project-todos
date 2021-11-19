import React from "react"
import { useSelector, useDispatch } from "react-redux"

import todos from "../reducers/todos"
import AddTodo from "./AddTodo"

import "./todolist.css"

const TodoList = () => {
  const items = useSelector((store) => store.todos.items)

  const dispatch = useDispatch()

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id))
  }

  const onRemoveTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id))
  }
  // a complete all button-dispatch here
  const onClickCompleteAll = () => {
    dispatch(items.actions.completeAllTasks())
  }

  //Filters completed and uncompleted tasks in different sections.
  const sortCompletedTasks = items.filter((item) => item.isComplete)

  const unCompletedTasks = items.filter((item) => !item.isComplete)

  return (
    <>
      <section className="todo-container">
        {unCompletedTasks.map((item) => (
          <div className="list-item-box" key={item.id}>
            <p>
              <input
                className="check-box"
                type="checkbox"
                checked={item.isComplete}
                onChange={() => onToggleTodo(item.id)}
              />
              <span className="item-text">
                {item.text} {item.category}
              </span>
            </p>
            <button
              className="delete-btn"
              onClick={() => onRemoveTodo(item.id)}
            >
              <span className="delete-sign" role="img" aria-label="trash bin">
                {" "}
                <i className="fas fa-trash-alt"></i>{" "}
              </span>
            </button>
          </div>
        ))}
      </section>
      <h2>Completed tasks</h2>

      {sortCompletedTasks.map((item) => (
        <div className="completed-items" key={item.id}>
          <input
            className="check-box"
            type="checkbox"
            checked={item.isComplete}
            onChange={() => onToggleTodo(item.id)}
          />
          <p>
            {item.text} {item.category}
          </p>
          <button className="delete-btn" onClick={() => onRemoveTodo(item.id)}>
            <span className="delete-complete">
              <span className="delete-sign" role="img" aria-label="trash bin">
                <i className="fas fa-trash-alt"></i>
              </span>
            </span>
          </button>

          <button onClick={onClickCompleteAll}>Delete all tasks</button>
        </div>
      ))}
    </>
  )
}

export default TodoList
