import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todos } from 'reducers/todos'
// import moment from 'moment'

import './style/Listed.css'

export const CompleteList = ({ todoIndex }) => {
  const dispatch = useDispatch()

  const todo = useSelector((store) => store.todos.list.todos[todoIndex])

  const handleRemoval = (e) => {
    dispatch(
      todos.actions.removeItem({
        todoIndex,
      })
    )
  }


  const handleChecked = (e) => {
    dispatch(
      todos.actions.setDone({
        todoIndex: todoIndex,
        complete: !todo.complete
      }))
  }


  return (
    <div className="postedContainer">
      <div className="eachItem">
        <label className="checkBox">
          <input type="checkbox"
            className="checkBox"
            checked={todo.complete ? 'checked' : ''}
            onChange={handleChecked} />
        </label>

        <div className="timeAndText">
          <p className={todo.complete === true ? "todoText check" : "todoText"}>{todo.text}</p>
          {/* <p className="todoTime">{moment(todo.time).format('D/M, HH:mm')}</p> */}
        </div>

        <button type="button"
          className="removeItem"
          onClick={handleRemoval}>
          🗑
        </button>
      </div>
    </div>
  )
}
