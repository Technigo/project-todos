import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
  const tasks = useSelector((store) => store.tasks.items)
  const completedCount = tasks.filter(task => task.complete === true).length
  console.log(tasks)


  return (
    <div>
      <h1>Todo</h1>
      {tasks.length === 0 ? 
      <p>{tasks.length} tasks</p> :
      <p>Finished{completedCount}/{tasks.length} tasks</p> }
    </div>
  )
}

export default Header;