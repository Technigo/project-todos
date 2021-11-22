import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: block;
  text-align: center;
  border-bottom: 1px solid mintcream;;
`
const Heading = styled.h1`
  font-size: 27px;
  padding-top: 15px;
  padding-bottom: 20px;
`
const Counter = styled.div`
  display: block;
`
const CounterItem = styled.div`
  text-align: center;
  font-weight: 700;
  margin-bottom: 15px;
`

const Header = () => {

  const items = useSelector((store) => store.todos.items);
  // const amountTodos = items.filter(todo => !todo.isComplete).length;
  const amountComplete = items.filter(todo => todo.isComplete).length;
  const totalItems = items.length;
  
  const currentDate = () => {
    return new Date().toLocaleDateString("en-US", ({ year: 'numeric', month: 'long', day: 'numeric' }));
  }

  return (
    <Container>
      <Heading>accompLISTment</Heading>
      <Counter>
        <p>{currentDate()}</p>
        <CounterItem><br/>Completed {amountComplete}/{totalItems}</CounterItem>
      </Counter>
    </Container>
  )
}
export default Header;