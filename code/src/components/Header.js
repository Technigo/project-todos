import React from 'react'
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'

import todos from '../reducers/todos'

const Header = () => {
    const items = useSelector((store) => store.todos.items)
    const completedItems = items.filter(items => items.isComplete)
    const dispatch = useDispatch()

  const onButtonClick = () => {
    if (completedItems.length === items.length) {
      dispatch(todos.actions.uncompleteAll())
    } else {
      dispatch(todos.actions.completeAll())
    }
    
  }

  return (
    <>
      <h1>To do List</h1>
      <h3>
       {moment().format('ddd MMMM Do YYYY')}
      </h3>
      <br/>
      <div className="statistics">
        <p>Total: {items.length}</p>
        {items.length > 0 && (<p>Completed: {completedItems.length}</p>)}
      </div>
      {items.length > 0 && (
        <button 
          className="complete-all-button" 
          onClick={onButtonClick}>
            {completedItems.length === items.length ? "Uncheck all" : "Check all"}
        </button>
      )}
    </>
    )
  }

export default Header