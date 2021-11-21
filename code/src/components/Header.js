import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Container = styled.div`
  display: block;
  text-align: center;
`
const Heading = styled.h1`
  padding-bottom: 10px;
`

const Counter = styled.div`
  display: block;

`

const CounterItem = styled.div`
  text-align: center;
`


const Header = () => {

  const items = useSelector((store) => store.todos.items);
  const amountTodos = items.filter(todo => !todo.isComplete).length;
  const amountComplete = items.filter(todo => todo.isComplete).length;
  const totalItems = items.length;
  
  const currentDate = () => {
    return new Date().toLocaleDateString("en-US", ({ year: 'numeric', month: 'long', day: 'numeric' }));
  }


  return (
    <Container>
      <h1>accompLISTment</h1>
      <Counter>
        <p>{currentDate()}</p>
        <CounterItem><br/>Accomplished {amountComplete}/{totalItems}</CounterItem>
      </Counter>
    </Container>
  )
}
export default Header;