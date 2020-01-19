import React from "react"
import { useSelector } from "react-redux"

export const Header = () => {
  const now = new Date(Date.now())
  const options = { dateStyle: "long" }
  const date = new Intl.DateTimeFormat("sv-SE", options).format(now)

  const uncomplete = useSelector(store =>
    store.todoList.items.reduce((total, item) => {
      if (item.complete) {
        return total
      } else {
        return total + 1
      }
    }, 0)
  )
  return (
    <div className='header'>
      <div className='logo'>Todo Today</div>
      <div className='header-info'>
        <div> {date} </div>
        <div>Items left: {uncomplete}</div>
      </div>
    </div>
  )
}
