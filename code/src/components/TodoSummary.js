// This component is shown in the top of the app between heading and add todo.
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { Title, Subtitle } from 'library/Text'

export const TodoSummary = () => {
  const items = useSelector((store) => store.todos.items)
  const completedItems = items.filter((item) => item.complete)
  
  //What is this referring to?? (from Jennies lecture):
  //const [showTodoList, setShowTodoList] = useState(false)

  if (items.length === 0) {
    return <Title>No todos added yet! Add todos below:</Title>
  }

  return (
    <div>
      <Title>On your todo-list today, you have {items.length} todo{items.length > 1 ? 's.' : '.'}</Title>
      {completedItems.length === items.length 
      ? <Subtitle>Well done, you have completed all tasks for today!</Subtitle>
      : <Subtitle>You have completed {completedItems.length} todo{completedItems.length === 1 ? '.' : 's.'}
      {' '}{items.length - completedItems.length} more to go!</Subtitle>
      }
    </div>
  )
}
