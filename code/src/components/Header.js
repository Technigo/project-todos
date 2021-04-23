import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'

import ClearAllButton from './ClearAllButton'
import AllDoneButton from './AllDoneButton'
import ResetButton from './ResetButton'

const Header = () => {
  const items = useSelector(store => store.todo.items)
  const itemsDone = items.filter(item => item.isComplete)
  const itemsNotDone = items.filter(item => !item.isComplete)

  return (
    <div className="header-container">
      <div className="date-wrapper">
        <h1 className="header-heading">TO DO</h1>
        <p className="week-day">{moment().format('dddd')} </p>
        <p>{moment().format('MMMM Do')} </p>
      </div>
      {items.length > 0 &&
        <div className="done-undone-wrapper">
          <p className="done-text">{itemsDone.length} tasks done</p>
          <p className="undone-text">{itemsNotDone.length} tasks to do</p>
          <div className="clear-buttons">
            <ClearAllButton />
            <AllDoneButton />
            <ResetButton />
          </div>
        </div>
      }
    </div>
  )
}
export default Header