import React from "react";
import styled from 'styled-components'
// import { TodoItem } from "./TodoItem.js";
// import { TodoInput } from "./TodoInput.js";
import { useSelector } from "react-redux";

const Summary=styled.section`
margin: 8px;
`

export const TodoSummary = () => {
  //Gets information from the store for this list
  const list = useSelector(store=>store.todos.list)

  //Counts the number of todos that are done using filter

  return <Summary>
    <h2>0/{list.items.length} tasks done</h2>
  </Summary>
}