import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todos } from 'reducers/todos'

import './style/Listed.css'

export const CompleteList = ({ todoIndex }) => {
  const dispatch = useDispatch()
  const todo = useSelector((store) => store.todos.list.todos[todoIndex])

  //Deletes item
  const handleRemoval = (e) => {
    dispatch(
      todos.actions.removeItem({
        todoIndex,
      })
    )
  }

  //Toggles checkbox 
  const handleChecked = (e) => {
    dispatch(
      todos.actions.setDone({
        todoIndex: todoIndex,
        complete: !todo.complete
      })
    )
  }

  //Container for each to do-task
  //Checkbox, task and delete
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
          <p className={todo.complete === true ? 
          "todoText check" : "todoText"}>
            {todo.text}
          </p>
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
