// This component is shown in the top of the app between heading and add todo.
// This should be a summary like: Todays date: You have X todos today ( x out of x todos are done)
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export const TodoSummary = () => {
  const items = useSelector((store) => store.todos.items) // or state.todos.items? or state.todos.todos?
  const completedItems = items.filter((item) => item.complete)
  
  //What is this referring to?? (from Jennies lecture)
  //const [showTodoList, setShowTodoList] = useState(false)

  return (
    <div>
      <h1>On your todo-list today, you have {items.length} todo{items.length > 1 ? 's' : ''}</h1>
      {/* Write if-statement so that if {items.length - completedItems.length} > 0 show: */}
      <h2>
        You have completed {completedItems.length} todo{completedItems.length > 1 ? 's' : ''}.
        {' '}{items.length - completedItems.length} more to go!
      </h2>
      {/* Or else, show: Well done, you have completed all tasks for today! */}
    </div>
  )
}
