import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'

const Header = () => {
  const items = useSelector(store => store.todo.items)
  const itemsDone = items.filter(item => item.isComplete)
  const itemsNotDone = items.filter(item => !item.isComplete)


  return (
    <div className="header-container">
      <div className="date-wrapper">
        <h1 className="header-heading">To do</h1>
        <p className="week-day">{moment().format('dddd')} </p>
        <p>{moment().format('MMMM Do')} </p>
      </div>

      <div className="done-undone-wrapper">
        <p>{itemsDone.length} items done</p>
        <p>{itemsNotDone.length} items to do</p>
      </div>
    </div>
  )
}
export default Header