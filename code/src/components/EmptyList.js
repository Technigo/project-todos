import React from 'react'
import '../styling/empty-list.css'


export const EmptyList = () => {
  return (

    <div className="empty-list">
      <p><span className="party" role="img" aria-label="party-popper">🎉</span></p>

      <p>Hurray! No items in your list, click to add new!</p>

    </div>
  )
}