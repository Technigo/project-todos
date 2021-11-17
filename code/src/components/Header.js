import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { todos } from '../reducers/todos'

const HeaderWrapper = styled.div`
  background-color: grey;
  height: 50px;
  display: flex;
  justify-content: space-between;
  width: 250px;
  margin: 10px auto;
`
const Title = styled.h1`
  margin: 0;
  font-size: 20px;
`
const Text = styled.p`
  margin: 0;
`
const Button = styled.button`
  background-color: blue;
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
        <Text>{items.reduce((a, b) => a && b.isComplete, true)}</Text>
        <Button onClick={onClearAll}>clear all</Button>
      </div>
    </HeaderWrapper>
  )
}
