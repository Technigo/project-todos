import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import todos from '../reducers/todos'

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #c7ebde;
  padding: 15px 0 15px 0;
  color: #032640;
`

const Title = styled.div`
  font-size: 30px;
  margin-bottom: 10px;
`
const Todo = styled.div`
  font-size: 20px;
`

const CompleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 90px;
  height: 40px;
  font-size: 15px;
  color: #032640;
`

const Header = () => {
  const items = useSelector((store) => store.todos.items)
  const completedItems = items.filter(singleTodo => singleTodo.isComplete)
  
  const dispatch = useDispatch()
  
   return (
    <HeaderContainer>
      <Title>Your Todo List</Title>
      <Todo>Completed tasks: {completedItems.length}/{items.length}</Todo>
      <CompleteButton
        onClick={() => dispatch(todos.actions.completeAllTodos())}>
        Complete all tasks
      </CompleteButton>
    </HeaderContainer>
  )
}

export default Header