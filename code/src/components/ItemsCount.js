import React from 'react'
import { useSelector } from 'react-redux'

export const ItemsCount = () => {
  const list = useSelector((store) => store.todos.items)

  // Numbers of items completed
  const numCompleted = list.filter(item => item.completed).length

  return (
    <div className="items-count">
      <i class="fas fa-list-alt"></i> {numCompleted}/{list.length} Completed
    </div>
  )
}
