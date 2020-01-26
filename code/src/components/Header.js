import React from 'react'
import moment from "moment"
import { useSelector } from 'react-redux'
import "./Header.css"

export const Header = () => {

  const completedTasks = useSelector((store) => store.tasks.items)

  return (
    <div className="header-container">
      <div class="header">
        <span class="title">Your todo list</span>
        <span className="completed-task">{completedTasks.length} completed tasks</span>
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