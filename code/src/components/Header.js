import React from 'react'
import { useSelector } from "react-redux"

export const Header = () => {
  const items = useSelector((state) => state.tasks.items)

  const completed = items.filter(item => item.checkedTask)

  return(
    <header>
      TITLE
      <p>Completed {completed.length} out of {items.length}</p>
    </header>
  )
}