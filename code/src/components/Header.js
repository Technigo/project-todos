import React from "react"
import { useSelector } from "react-redux"
import { ClearButton } from "components/ClearButton"
import moment from "moment"

import "./header.css"

export const Header = (state) => {
  const items = useSelector((state) => state.tasks.items)

  const completed = items.filter(item => item.checkedTask)

  return (
    <header>
      <div className="header-left">
        <h1>To do</h1>
        {/* <hr></hr> */}
        <p>{moment().format('MMMM Do')}</p>
      </div>
      <div class="vertical-line"></div>
      <div className="header-right">
        <p>Done: {completed.length} / {items.length}</p>
        <ClearButton />
      </div>
    </header>
  )
}



