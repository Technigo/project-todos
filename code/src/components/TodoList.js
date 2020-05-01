import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import { TodoItem } from "./TodoItem.js"
import { TodoInput } from "./TodoInput.js"
import { TodoSummary } from "./TodoSummary.js"
import { ClearButton } from "./ClearButton"

const TodoListContainer = styled.section`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
  font-family: 'Work Sans', sans-serif;
  background: #fff;

  @media (min-width: 700px) {
    margin: 30px 15%;
    height: auto;
    border: 2px solid #2d3755;
    border-radius: 12px;
  }
`
const InputContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 4% 8%;
`

export const TodoList = () => {

  // Gets information about todo list from the store
  const items = useSelector(store => store.todos.list.items)

  return (
    <TodoListContainer>
      <TodoSummary />
      <InputContainer>
        <TodoInput />
        {items.map((item, index) => (<TodoItem key={item.id} item={item} itemId={item.id} index={index} />))}
        <ClearButton />
      </InputContainer>
    </TodoListContainer>
  )
}