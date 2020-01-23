import React from 'react'
import moment from "moment"
import { useSelector, useDispatch } from 'react-redux'

export const Header = () => {
  //const dispatch = useDispatch()
  const completedTasks = useSelector((store) => store.tasks.items)

  return (
    <div className="header-container">
      <div class="header">
        <span class="title">Your Todo list</span>
        <span className="completedTask">{completedTasks.length}</span>
      </div>
      <div class="header-footer">
        <span className="moment">{moment().format("MMMM Do")}</span>
      </div>
      <button
        class="clear-btn"
        type="button"
      >
        Clear all tasks
        </button>

    </div>
  )
}