import React from 'react';

import { useDispatch, useSelector } from 'react-redux'
import { todos } from '../reducers/todos'

import './item.css'
import ic_check_true from '../assets/ic_check_true.svg'
import ic_check_false from '../assets/ic_check_false.svg'
import ic_delete from '../assets/ic_delete.svg'


export const Item = (props) => {

  const dispatch = useDispatch()
  // Defining "items" in which we'realling a function, and inside the parenthesis, we're giving another function. 
  const items = useSelector(store => store.todos.items)

  // FUNCTIONS FOR THE ITEM

  // >>> TOGGLE CHECKBOX
  const isDone = () => {
    dispatch(
      todos.actions.toggleDone()
    )
  }

  // >>> REMOVE THE LAST ONE
  const removeOne = () => {
    dispatch(
      todos.actions.removeOne()
    )
  }

  // >>> DELETE TASK
  const deleteTask = () => {
    dispatch(
      todos.actions.deleteTask(props.index)
    )
  }
  
  return (
    <div className="list-item">

      {/* TOGGLE IS-DONE BUTTON */}
      <button onClick={isDone}>
        <img
          src={props.isDone === true ? ic_check_true : ic_check_false}
          alt="task is done"></img>
      </button>

      <p className={props.isDone === true ? "p-isDone" : "p-unisDone"}>
        {props.text}
      </p>

      {/* DELETE TASK BUTTON */}
      <button onClick={deleteTask}>
        <img
          src={ic_delete}
          alt="task isn't done"></img>
      </button>
    </div>
  )
}