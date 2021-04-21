import React from 'react'

const EmptyTodoList = () => {
  return (
    <div className="empty-todo-container">
      <h1> Hello, friend! </h1>
      <p>Got something to do? Just add it to the list!</p>
      <img
        src="./assets/todo.jpg"
        alt="Todo list"
        className="image"
      />
    </div>
  )
}
export default EmptyTodoList