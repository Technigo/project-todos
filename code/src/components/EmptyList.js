import React from 'react';

export const EmptyList = () => {
  return (
    <div className="empty-todo-list">
      <h3 className="empty-todo-list-header">There is nothing here!
      <span role="img" aria-label="party emoji">🥳</span>
     </h3>
     <p className="empty-todo-list-text">Enjoy the peace and quiet or start adding things to your list.</p>
    </div>
  )
}