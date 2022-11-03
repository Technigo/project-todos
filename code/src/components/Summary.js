import React from 'react'
import { useSelector } from 'react-redux'

const Summary = () => {
  const list = useSelector((store) => store.todos.items)

  // counts the number of tasks that is done (isDone: true)
  const numDone = list.filter((item) => item.isDone).length

  return (
    <div className="Summary">
      <p>Completed: <span>{numDone}/{list.length}</span></p>
    </div>
  )
}

export default Summary