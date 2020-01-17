import React from "react"
import moment from "moment"

import "./header.css"
import { ClearButton } from "./ClearButton"

export const Header = () => {
  return (
    <div className="header-container">

      <div className="title-container">
        <span>My To Do </span>
        <span>{moment().format('dddd Do MMM')}</span>
      </div>
      <div className="info-container">
        <span>4 tasks </span>
        <ClearButton />
      </div>
    </div>
  )
}