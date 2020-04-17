import React, { useEffect, useState } from 'react'
import { TodoInput } from './TodoInput'
import { TodoItem } from './TodoItem'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

export const TodoList = () => {
  const list = useSelector(store => store.todos.list)

  return (
    <TodoContainer>
      <TodoInput />
      {list.items.map((item, index) => (
        <TodoItem itemIndex={index}></TodoItem>
      ))}
    </TodoContainer>
  )
}

const TodoContainer = styled.section`

`