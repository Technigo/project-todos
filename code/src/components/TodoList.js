import React from "react"
import styled from 'styled-components'
import { TodoItem } from "./TodoItem.js"
import { TodoInput } from "./TodoInput.js"
import { TodoSummary } from "./TodoSummary.js"
import { ClearButton } from "./ClearButton"
import { useSelector } from "react-redux"

const TodoListContainer = styled.section`
padding: 16px;
display: flex;
flex-direction: column;
justify-content: flex-start;
background-color: #dff9fb;
`

export const TodoList = () => {

  // Gets information about this list from the store
  const list = useSelector(store => store.todos.list)

  return(
    <TodoListContainer>
       <TodoSummary />
      <TodoInput />
      {list.items.map((item, index) =>(<TodoItem itemIndex={index}></TodoItem>))}
      <ClearButton />
    </TodoListContainer>
  )
}