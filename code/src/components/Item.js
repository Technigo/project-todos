import React from 'react';

import { useDispatch } from 'react-redux'
import { todos } from '../reducers/todos'

import './item.css'
import ic_check_true from '../assets/ic_check_true.svg'
import ic_check_false from '../assets/ic_check_false.svg'
import ic_delete from '../assets/ic_delete.svg'

export const Item = (props) => {
  const dispatch = useDispatch()

  // ## TOGGLE CHECKBOX
  const isDone = () => {
    dispatch(
      todos.actions.toggleDone(props)
    )
  }

  // ## DELETE TASK
  const deleteTodo = () => {
    dispatch(
      todos.actions.deleteTodo(props.index)
    )
  }
  
  return (
    <div className="list-item">

      {/* Toggle "is done" button */}
      <button className="list-button-blue" onClick={isDone}>
        <img
          src={props.isDone === true ? ic_check_true : ic_check_false}
          alt="task is done"></img>
      </button>

      {/* Set the className of the text depending on if the task is done or not */}
      <p className={props.isDone === true ? "p-is-done-true" : "p-is-done-false"}>
        {props.text}
      </p>

      {/* DELETE TASK BUTTON */}
      <button className="list-button-gray" onClick={deleteTodo}>
        <img src={ic_delete} alt="Task isn't done"></img>
      </button> 
    </div>
  )
}