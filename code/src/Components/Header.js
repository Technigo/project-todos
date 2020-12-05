import React from "react"
import moment from "moment"

import { TaskSummary } from "./TaskSummary"

export const Header = () => {
  return (
    <section className="header-container">
      <h1 tabIndex="0">To-do Today</h1>
      <div className="header-details">
        <span className="header-date" tabIndex="0">{moment().format("dddd Do MMM")}</span>
        <TaskSummary />
      </div>
    </section>
  )
}