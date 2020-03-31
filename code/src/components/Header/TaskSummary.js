import React from 'react'
import { useSelector } from 'react-redux'

const TaskSummary = () => {

  const tasks = useSelector(state => state.tasks).length
  const completed = useSelector((state) => state.tasks.filter((item) => item.completed)).length
  const active = useSelector((state) => state.tasks.filter((item) => !item.completed)).length

  return(
    <div>
      <div>{tasks}</div>
      <div>{completed}</div>
      <div>{active}</div>
    </div>
    
  )
}

export default TaskSummary