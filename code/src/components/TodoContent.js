import React from 'react'

import { AddingTodo } from './AddingTodo'
import { ListedItems } from './ListedItems'
import { ClearAll } from './ClearAll'

import './style/Content.css'
import './style/Base.css'
// import { TimeRange } from './TimeRange'

export const TodoContent = () => {
  return (
    <main className="mainContent">
      <AddingTodo />
      <ListedItems />
      <ClearAll />
    </main>
  )
}