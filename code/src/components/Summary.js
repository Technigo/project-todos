import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

import { Input } from './Input'
import { Item } from './Item'

export const Summary = () => {
  const list = useSelector((store) => store.todos.list)

  const numOfCompleted = list.todoItems.filter(item => item.done).length
  return (
    <div>
      <p>{numOfCompleted}/{list.todoItems.length} todos complete</p>
    </div>
  )
}