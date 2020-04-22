import React from 'react'
import emptyList from 'assets/empty-list.png'

export const EmptyState = () => {
  return (
    <div className="empty-state">
      <img src={emptyList} alt="Adding tasks to Todo list" />
      <h2>Start adding stuff to do!</h2>
    </div>
  )
}
