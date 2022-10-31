import React from 'react'
import { useSelector } from 'react-redux'

const Summary = () => {
  const counter = useSelector((store) => store.todos.items);
  const CompletedTodo = counter.filter((item) => item.completed).length;
  const notCompleted = counter.length;
  return (
    <>
      <h1> Hello todo </h1>
      <p> {CompletedTodo} of {notCompleted} </p>
    </>
  )
}

export default Summary