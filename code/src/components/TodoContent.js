import React from 'react'

import { AddingTodo } from './AddingTodo'
import { ListedItems } from './ListedItems'
import { ClearAll } from './ClearAll'

import './Content.css'

export const TodoContent = () => {
  return (
    <main className="mainContent">
      <AddingTodo />
      <ListedItems />
      <ClearAll />
    </main>
  )
}