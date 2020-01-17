import React from "react"
import moment from "moment"
import "./date.css"

export const Date = () => {
  const currentDate = moment(Date.now).format('LL')

  return (
    <p className="current-date">{currentDate}</p>
  )
}