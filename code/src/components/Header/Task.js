import React from 'react'
import { connect } from 'react-redux'
import { toggleComplete } from '../../reducers/TasksSlice' 

const mapDispatch = { toggleComplete }

const Task = ({ task, toggleComplete }) => {
  return (
    <li>{task.text}<input type="checkbox" value={task.completed} onChange={() => toggleComplete(task.id)} /></li>
  )
}

export default connect(
  null,
  mapDispatch
)(Task)