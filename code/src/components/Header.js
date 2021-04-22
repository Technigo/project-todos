import React from 'react'
import moment from 'moment'
import { useSelector } from 'react-redux'



const Header = () => {
    const items = useSelector((store) => store.todos.items)
    const completedItems = items.filter(items => items.isComplete)

  return (
    <>
      <h1>To do List</h1>
      <h3>
       {moment().format('ddd MMMM Do YYYY')}
      </h3>
      <br/>
      <div className="statistics">
        <p>Total: {items.length}</p>
        <p className={items.length > 0 ? "" : "completedTodos-none"}>Completed: {completedItems.length}</p>
      </div>
      {/* <button>Delete all</button>      */}
    </>
  )
}

export default Header