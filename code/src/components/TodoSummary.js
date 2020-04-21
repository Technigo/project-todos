import React from "react";
import styled from 'styled-components'
import { useSelector } from "react-redux";

const Summary=styled.section`
margin: 8px;
`

export const TodoSummary = () => {
  //Gets information from the store for this list
  const list = useSelector(store=>store.todos.list)

  //Counts the number of todos that are done using filter
  const numberDone = list.items.filter(item => item.done).length 

  return <Summary>
    <h2>{numberDone}/{list.items.length} tasks done</h2>
  </Summary>
}