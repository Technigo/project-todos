import React from 'react'
import { TodoItem } from './TodoItem'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { EmptyState } from './EmptyState'

export const TodoItems = () => {
  const items = useSelector(store => store.todos.items)

  return (
    <TodoListing>
      {items.length > 0 &&
        <>
          {items.map((item, index) => (
            <TodoItem key={index} item={item} itemIndex={index}></TodoItem>
          ))}
        </>
      }

      {items.length === 0 &&
        <EmptyState />
      }
    </TodoListing>
  )
}

const TodoListing = styled.section`
  flex: 1;
  width: 90%;
  margin: 5px auto;
`