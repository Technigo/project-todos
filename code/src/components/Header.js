import React from "react"
import moment from "moment"

import "./header.css"
import { ClearButton } from "./ClearButton"
import { TasksQuantity } from "./TasksQuantity"



export const Header = () => {
  return (
    <div className="header-container">

      <div className="title-container">
        <h2> My todos <span className="header-icon" role="emoji" aria-label="todo emoji"> 🔖</span> </h2>
        <span>{moment().format('dddd Do MMM')}</span>
      </div>
      <div className="info-container">
        <TasksQuantity />
        <ClearButton />
      </div>
    </div>
  )
}