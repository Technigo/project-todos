import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export const TodoSummary = () => {
  const items = useSelector(state => state.todo.items)
  const finishedItems = items.filter(item => item.finishedTask)

  return (
    <section class="itemsleft">
      <h2>You have {items.length-finishedItems.length} task
      {items.length-finishedItems.length === 1 ? ' ' : 's'} left.</h2>
      
      <h3>
        You have finished {finishedItems.length} task
        {finishedItems.length === 1 ? '.' : 's.'}
        {finishedItems.length === 0 ? '' : ' Good job!'}
      </h3>

    </section>
  )
}