import React from "react"
import styled from 'styled-components'
import { TodoItem } from "./TodoItem.js"
import { TodoInput } from "./TodoInput.js"
import { TodoSummary } from "./TodoSummary.js"
import { ClearButton } from "./ClearButton"
import { useSelector } from "react-redux"

const TodoListContainer = styled.section`
display: flex;
flex-direction: column;
font-family: 'Work Sans', sans-serif;
`
const InputContainer = styled.section`
display: flex;
flex-direction: column;
justify-content: flex-start;
min-height: 100vh;
padding: 18px;
background-color: #dff9fb;

@media (min-width: 668px) {
  padding: 5% 20%;
}
`

export const TodoList = () => {

  // Gets information about this list from the store
  const list = useSelector(store => store.todos.list)

  return(
    <TodoListContainer>
       <TodoSummary />
       <InputContainer>
       <TodoInput />
      {list.items.map((item, index) =>(<TodoItem itemIndex={index}></TodoItem>))}
      <ClearButton />
       </InputContainer>
    </TodoListContainer>
  )
}