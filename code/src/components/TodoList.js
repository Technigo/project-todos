import React from "react";
import { useSelector } from "react-redux";


const TodoList = () => {
  const todoList = useSelector((store) => store.todos.items)
  console.log(todoList)
  return (
    <section>Here is the list!</section>
  )
}

export default TodoList