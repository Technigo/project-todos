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
      background: #3e3e2d;
      border-radius: 10px; 
  }
`

export const TodoItems = () => {
  const items = useSelector(store => store.todos.items)

  //If the todo list contains todos it will render them, if it is empty it will render the EmptyState component
  return (
    <TodoListing>

      {items.length > 0 &&
        <>
          {items.map((item, id) => (
            <TodoItem key={id} item={item} itemId={id}></TodoItem>
          ))}
        </>
      }

      {items.length === 0 &&
        <EmptyState />
      }

    </TodoListing>
  )
}