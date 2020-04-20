import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'


export const ShowSummery = () => {
  const items = useSelector((store) => store.reducer.todoListItems)

  return (
    <main>
      <section>
        {/* Show total numbers of todo */}
        {items.items.length}
      </section>
    </main>
  )
}