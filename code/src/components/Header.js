import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  color: green;
`

const Title = styled.div`
  color: green;
`
const Todo = styled.div`
  color: green;
`

const Header = () => {
  const items = useSelector((store) => store.todos.items)
 
  return (
    <HeaderContainer>
      <Title>Your Todo List</Title>
      <Todo>You have {items.length}{' '}{items.length ===1 ? 'task' : 'tasks' }</Todo>
    </HeaderContainer>
  )
}

export default Header