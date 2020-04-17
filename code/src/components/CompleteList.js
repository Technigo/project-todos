import React from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'

import './Listed.css'

export const CompleteList = (props) => {
  const dispatch = useDispatch()

  const handleRemoval = () => {
    dispatch(todos.actions.removeOne(props.todo.id))
  }

  const handleChecked = () => {
    dispatch(todos.actions.isDone(props.todo.id))
  }

  return (
    <div className="postedContainer">
      <div className="eachItem"
        key={props.todo.id}>
        <input type="checkbox"
        checked={props.todo.complete}
        onChange={handleChecked}/>
        <p className="todoText">{props.todo.text}</p>
        <p className="todoTime">{props.todo.time}</p>
      </div>
      <div>
        <button type="button"
          onClick={handleRemoval}>
          🗑
        </button>
      </div>
    </div>
  )
}
