import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import Counter from './Counter'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import Header from './Header'

const Container = () => {
  const items = useSelector((store) => store.todos.items)

  return (
    <Body>
      <Wrapper>
        <Header />
        <Counter display="remaining" items={items}/>
        <TodoList items={items} complete={false}/>
        <TodoForm />
        <Counter display="finished" items={items}/>
        <TodoList items={items} complete/>
      </Wrapper>
    </Body>
  )
}

const Body = styled.div`
  height: 100vh;
  padding-top: 5vh;
  background-color: #E9E9EC;
  box-sizing: border-box;
`

const Wrapper = styled.div`
  padding: 60px 30px;
  background-color: white;
  max-width: 375px;
  min-height: 70vh;
  margin: 0 auto;
  border-radius: 24px;
`

export default Container
