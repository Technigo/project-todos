import React from 'react'

import { AddingTodo } from './AddingTodo'
import { ListedItems } from './ListedItems'
import './Content.css'

export const TodoContent = () => {
  return (
    <div className="mainContent">
      <AddingTodo />
      <ListedItems />
    </div>
  )
}