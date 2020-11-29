import React from 'react';

import { useDispatch, useSelector } from 'react-redux'
import { todos } from '../reducers/todos'

import './item.css'
import './listfilter.css'
import ic_check_true from '../assets/ic_check_true.svg'
import ic_check_false from '../assets/ic_check_false.svg'
import ic_delete from '../assets/ic_delete.svg'
import { List } from './List';

export const ListFilter = () => {
  const dispatch = useDispatch()
  // Defining "items" in which we're calling a function, and inside the parenthesis, we're giving another function. 
  // "items" is the list of todo items. 
  const items = useSelector(store => store.todos.items)
  // ## REMOVE COMPLETED
  const removeCompleted = () => {
    dispatch(
      todos.actions.removeCompleted()
    )
  }
  // ## REMOVE ALL
  const removeAll = () => {
    dispatch(
      todos.actions.removeAll()
    )
  }

  const countDone = () => {
    let doneItems = items.filter(item => item.isDone === true)
    return doneItems.length
  }
  
  return (
    <div className="list-item-filter">

      <div className="filter-left-items">
        <div className="progress-bar-container">
          <div  style={{width: countDone()/items.length*100}} className="progress-bar-fill"></div>
        </div>
        <p>{countDone()}/{items.length} done</p>
      </div>

      <div className="filter-right-items">
        <p>Clear:</p>
        <button onClick={removeCompleted}>DONE</button>
        <button onClick={removeAll}>ALL</button>
      </div>

    </div>
  )
}