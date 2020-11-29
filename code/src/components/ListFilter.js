import React from 'react';

import { useDispatch, useSelector } from 'react-redux'
import { todos } from '../reducers/todos'

import './item.css'
import './listfilter.css'


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
    throwConfetti()
  }

  const throwConfetti = () => {
    window.confetti.start(2000, 150)
  }

  const countDone = () => {
    // Function which counts and returns the number of "done" items.
    let doneItems = items.filter(item => item.isDone === true)
    if (doneItems.length === items.length) {
      throwConfetti()
    } else if (items.length === 0) {
      throwConfetti()
    }
    return doneItems.length
  }
  
  return (
    <>
    {/* Only display the filters if there are tasks (i.e. if the length of "lists" is greater than 0.) */}
    { items.length > 0 && 
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
    }
    </>
  )
}