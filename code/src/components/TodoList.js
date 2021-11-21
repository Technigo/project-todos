import React from "react"
import { useSelector, useDispatch } from "react-redux"

//import of the reducers file
import todos from "../reducers/todos"

import "./todolist.css"

const TodoList = () => {
  //getting all the items(tasks)-array from the store
  const items = useSelector((store) => store.todos.items)

  const dispatch = useDispatch()

  //make it so it is possible to toggle between completed and uncompleted task
  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id))
  }

  //Removing a task completely from the list
  const onRemoveTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id))
  }

  //Filters completed and uncompleted tasks in different sections.
  const sortCompletedTasks = items.filter((item) => item.isComplete)

  const unCompletedTasks = items.filter((item) => !item.isComplete)

  return (
    <>
      <section className="todo-container">
        <div className="todo-wrapper">
          {unCompletedTasks.map((item) => (
            <div className="list-item-box" key={item.id}>
              <p>
                <input
                  className="check-box"
                  type="checkbox"
                  checked={item.isComplete}
                  onChange={() => onToggleTodo(item.id)}
                />
                <span className="item-text">{item.text}</span>
              </p>
              <button
                className="delete-btn"
                onClick={() => onRemoveTodo(item.id)}
              >
                <span className="delete-sign" role="img" aria-label="trash bin">
                  <i className="fas fa-trash-alt"></i>
                </span>
              </button>
            </div>
          ))}
        </div>

        <h2> Completed ✓</h2>
        <div className="todo-wrapper">
          {sortCompletedTasks.map((item) => (
            <div className="completed-items" key={item.id}>
              <input
                className="check-box"
                type="checkbox"
                checked={item.isComplete}
                onChange={() => onToggleTodo(item.id)}
              />
              <p>{item.text}</p>
              <button
                className="delete-btn"
                onClick={() => onRemoveTodo(item.id)}
              >
                <span className="delete-complete">
                  <span
                    className="delete-sign"
                    role="img"
                    aria-label="trash bin"
                  >
                    <i className="fas fa-trash-alt"></i>
                  </span>
                </span>
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default TodoList
