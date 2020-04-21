import React, { useEffect, useState } from 'react'
import { TodoItem } from './TodoItem'
import { TodoInput } from './TodoInput'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

export const TodoSummary = () => {
//Get list information from the store, for this list 
const list = useSelector(store => store.todos.list)
// Count the number of items that are done using filter
const numDone = list.items.filter(item => item.done).length

return (

<section className='todo-summary'>
  <H2>
    {numDone}/{list.items.length} tasks
  </H2>
</section>

)}

const H2 = styled.h2 `
font-size: 14px;
text-transform: uppercase;
color: grey;
margin: 20px 20px 5px 0;
`