import React from 'react'

import { Header } from './Header' 
import { AddingTodo } from './AddingTodo'
import { ListedItems } from './ListedItems'
import { ClearAll } from './ClearAll'

import './style/Content.css'
import './style/Base.css'
// import { TimeRange } from './TimeRange'

export const TodoContent = () => {
  return (
    <main className="mainContent">
      <Header />
      <AddingTodo />
      <ListedItems />
      <ClearAll />
    </main>
  )
}