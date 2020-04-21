import React from 'react'
import styled from 'styled-components/macro'
import { useSelector } from 'react-redux'
import { TodoItem } from './TodoItem'
import { EmptyState } from './EmptyState'

const TodoListing = styled.section`
  flex: 1;
  width: 90%;
  margin: 5px auto;
  overflow: auto;
  
  ::-webkit-scrollbar {
    width: 4px;
    padding-right: -4px;
  }
 
  ::-webkit-scrollbar-track {
      background: #eaceca;
      border-radius: 10px;
  }
 
  ::-webkit-scrollbar-thumb {
      background: #b55136;
      border-radius: 10px; 
  }
`

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