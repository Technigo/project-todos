import React from "react"
import moment from "moment"

import "./header.css"
import { ClearButton } from "./ClearButton"
import { TasksQuantity } from "./TasksQuantity"



export const Header = () => {
  return (
    <div className="header-container">

      <div className="title-container">
        <span> My To-Do </span>
        <span>{moment().format('dddd Do MMM')}</span>
      </div>
      <div className="info-container">
        <TasksQuantity />
        <ClearButton />
      </div>
    </div>
  )
}