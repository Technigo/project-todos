import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'



const Header = () => {

  const items = useSelector((store) => store.todos.items);
  const amountTodos = items.filter(todo => !todo.isComplete).length;
  const amountComplete = items.filter(todo => todo.isComplete).length;
  const totalItems = items.length;

  return (
    <>
    <h1>accompLISTment</h1>
    <div>to be done: {amountTodos}</div>
    <div>completed: {amountComplete}</div>
    <div>total: {totalItems}</div>
    </>
  )
}
export default Header;