import React from 'react'
import { TitleContainer } from './TitleContainer'
import { TodoInput } from './TodoInput'
import { TodoItem } from './TodoItem'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

export const TodoItems = () => {
  const items = useSelector(store => store.todos.items)

  return (
    <TodoListing>
      {items.map((item, index) => (
        <TodoItem key={index} item={item} itemIndex={index}></TodoItem>
      ))}
    </TodoListing>
  )
}

const TodoListing = styled.section`
  flex: 1;
  width: 90%;
  margin: 5px auto;
`