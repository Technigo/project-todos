import React from "react"
import styled from "styled-components"
import { useSelector } from "react-redux"

const Header = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  height: 120px;
  border-bottom: 1px solid #535c68;
  background: #34ace0;
  font-family: 'Work Sans', sans-serif;
`


export const TodoSummary = () => {
  //Gets information from the store for todo list
  // const list = useSelector(store => store.todos.list)
  const items = useSelector(store => store.todos.list.items)

  //Counts the number of todos that are done using filter
  const numberDone = items.filter(item => item.done).length

  return <Header>
    <h2>Todo</h2>
    <p>{numberDone}/{items.length} tasks done</p>
  </Header>
}