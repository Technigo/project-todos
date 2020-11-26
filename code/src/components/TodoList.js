import React from 'react'

import { useSelector } from 'react-redux'


export const TodoList = () => {
  
  const todoItems = useSelector((store) => store.todos.text);
  
  return (
    <>
      {todoItems.map((text, index) => (
        <Item key={index} item={text}></Item>
      ))}
    </>
  )
}
