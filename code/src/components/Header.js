import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'



const Header = () => {

  const items = useSelector((store) => store.todos.items);
  const amountTodos = items.filter(todo => !todo.isComplete).length;

  return (
    <>
    <h1>My Todo's</h1>
    <div>Todo's: {amountTodos}</div>
    </>
  )
}
export default Header;