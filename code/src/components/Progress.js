import React from 'react'
import { useSelector } from 'react-redux'

const Progress = () => {
  const items = useSelector((store) => store.todos.items)

  return (
    <div className='progress'>
      <p>Todo: {items.filter((item) => item.status === 'todo').length} </p>
      <p>
        In Progress:{' '}
        {items.filter((item) => item.status === 'in progress').length}
      </p>
      <p>
        Completed: {items.filter((item) => item.status === 'completed').length}
      </p>
    </div>
  )
}

export default Progress
