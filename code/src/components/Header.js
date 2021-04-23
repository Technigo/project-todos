import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #c7ebde;
  padding: 15px 0 15px 0;
`

const Title = styled.div`
  font-size: 25px;
  
`
const Todo = styled.div`
  font-size: 15px;
  
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