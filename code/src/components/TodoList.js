/* eslint-disable no-return-assign */
/* eslint-disable linebreak-style */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import todos from '../reducers/todos'
import './todoList.css'

const TodoList = () => {
  const items = useSelector((store) => store.todos.items)

  let count = 0
  const dispatch = useDispatch()

  const onClickAllDone = () => {
    dispatch(todos.actions.allDone())
  }

  return (
    <div>
      {items.map((todo) => (
        <div key={todo.id} className="todo-items">
          <div className="todo-item">
            <input
              className="checkbox"
              type="checkbox"
              checked={todo.isComplete}

              onChange={() => dispatch(todos.actions.toggleComplete(todo.id))} />
            <p className="task-description">{todo.description}</p>

            <button type="button" className="btn-delete" onClick={() => dispatch(todos.actions.removeTodo(todo.id))}>
              <span className="trash-item">🗑</span>
            </button>

            <div className="counter">
              {todo.isComplete ? count : count += 1}
            </div>

          </div>

          <div className="time">
                        task created: {todo.timeCreated}
          </div>

        </div>
      ))}

      <div className="summary">
        <h4>SUMMARY</h4>
        <p>You have {items.length} tasks on your todo list</p>
        <p><span>Tasks to complete: {count}</span></p>

        <button className="all-done" onClick={onClickAllDone}>
            sure? or lazy?
        </button>

      </div>

    </div>
  )
}

export default TodoList
