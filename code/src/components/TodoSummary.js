import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

export const TodoSummary = () => {
  const list = useSelector(store => store.todos.list)
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