import React from "react"
import styled from "styled-components"
import { useSelector } from "react-redux"

const Header = styled.section`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 18px;
height: 120px;
background: #c7ecee;
font-family: 'Work Sans', sans-serif;

@media (min-width: 668px) {
  padding: 0 20%;
}
`


export const TodoSummary = () => {
  //Gets information from the store for this list
  const list = useSelector(store => store.todos.list)

  //Counts the number of todos that are done using filter
  const numberDone = list.items.filter(item => item.done).length

  return <Header>
    <h2>Todo</h2>

    <p>{numberDone}/{list.items.length} tasks done</p>

  </Header>


}