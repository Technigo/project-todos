import React, { useEffect, useState } from 'react'
import { TodoInput } from './TodoInput'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

export const TodoList = () => {
  const list = useSelector(store => store.todos.list)

  return (
    <TodoContainer>
      <TodoInput />
      {list.items.map(item => item.description)}
    </TodoContainer>
  )
}

const TodoContainer = styled.section`

`