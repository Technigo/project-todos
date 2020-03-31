import React from 'react'
import { useSelector } from 'react-redux'


const TaskSummary = () => {
  const tasks = useSelector(state => state.tasks).length
  return (
    <div>{tasks}</div>
  )
}

export default TaskSummary