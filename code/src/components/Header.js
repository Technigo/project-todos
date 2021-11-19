import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'

import { todos } from '../reducers/todos'

const HeaderWrapper = styled.div`
  background-color: rgb(244, 244, 244);
  display: flex;
  justify-content: space-between;
  padding: 10px;
`
const Title = styled.h1`
  margin: 0;
  font-size: 2.5rem;
`
const Text = styled.p`
  margin: 0;
`
const Button = styled.button`
  background-color: rgb(106, 121, 248);
  border: 0;
  padding: 3px 6px;
  border-radius: 5px;
  color: white;
`

export const Header = () => {
  const items = useSelector(store => store.todos.items)
  const dispatch = useDispatch()

  const onClearAll = () => {
    dispatch(todos.actions.clearAllTodos())
  }

  return (
    <HeaderWrapper>
      <div>
        <Title>Todo</Title>
        <Text>Today</Text>
      </div>
      <div>
        <Text>{items.length}</Text>
        <Button onClick={onClearAll}>clear all</Button>
      </div>
    </HeaderWrapper>
  )
}
