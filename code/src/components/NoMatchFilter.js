import React from 'react'

const NoMatchFilter = () => {
  return (
    <div className="empty-todo-container">
      <h1> Sorry, friend! </h1>
      <p>There are no tasks matching your criteria!</p>
      <img
        src="./assets/doubt.jpg"
        alt="Todo list"
        className="image"
      />
    </div>
  )
}
export default NoMatchFilter