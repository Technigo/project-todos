import React from 'react'
import { useSelector } from 'react-redux'
import ClearAll from 'components/ClearAll'
import AddTodo from 'components/AddTodo'
import styled from 'styled-components'

const TheHeader = styled.header`
  width: 300px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 5px;
  background-color: #ffffff10;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.06);
  padding-left: 10px;
  padding-right: 10px;

  h1 {
    font-family: 'Ubuntu', sans-serif;
    font-size: 30px;
    margin-top: 30px;
    margin-bottom: 20px;
    padding-top: 10px;
    color: black;
  }
`
const HeaderFunctions = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding-top: 20px;
    margin-bottom: -40px;
    width: 100%;

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
    <HeaderFunctions>
      <p className="counter-paragraph">Completed {amountTodos}/{totalTodos}</p>
      <ClearAll />
    </HeaderFunctions>
    </TheHeader>
  )
}

export default Header