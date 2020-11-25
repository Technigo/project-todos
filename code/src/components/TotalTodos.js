import React from 'react'
import { useSelector } from 'react-redux'

export const TotalTodos = () => {
  const totalTodos = useSelector((store) => store.tasks.items.length)

return <p>{totalTodos}</p>

}