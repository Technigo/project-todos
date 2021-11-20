import React from 'react'
import { useSelector } from 'react-redux'
import ClearAll from 'components/ClearAll'
import AddTodo from 'components/AddTodo'
import styled from 'styled-components'

const TheHeader = styled.header`
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 5px;

  h1 {
    font-family: 'Ubuntu', sans-serif;
    font-size: 30px;
    margin-top: 30px;
    margin-bottom: 20px;
    color: black;
  }

  .header-functions-container {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding-top: 20px;
    margin-bottom: -40px;
    width: 100%;
  }

  .counter-paragraph {
    color: grey;
  }
`
const Header = () => {

  const items = useSelector((store) => store.todos.items) //Reaching for the todos via selector
  const amountTodos = items.filter(todo => todo.isComplete).length //Filter out the amount of completed todos
  const totalTodos = items.length //Reaching for total amount of todo's

  return (
    <TheHeader>
    <h1>Todos</h1>
    <AddTodo />
    <div className="header-functions-container">
      <p className="counter-paragraph">Completed {amountTodos}/{totalTodos}</p>
      <ClearAll />
    </div>
    </TheHeader>
  )
}

export default Header