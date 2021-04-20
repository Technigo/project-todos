import React from 'react'
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'


import todos from '../reducers/todos'

const Header = () => {
    // Reach from items array from redux store
    const items = useSelector((store) => store.todos.items)
    const completedItems = items.filter(items => items.isComplete)

  return (
    <>
      <h1>My list</h1>
      <p>
       {moment().format('dddd MMMM Do YYYY')}
      </p>
      <div className="statistics">
        <p>Completed: {completedItems.length}</p>
        <p>Total: {items.length}</p>
      </div>      
    </>
  )
}

export default Header