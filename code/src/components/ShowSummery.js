import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'


export const ShowSummery = () => {
  const items = useSelector((store) => store.todo.todoListItems)
  const numDone = items.items.filter(item => item.done).length;

  return (
    <main>
      <section>
        {/* Show total numbers of todo */}
        Done {numDone}/{items.items.length}
      </section>
    </main>
  )
}