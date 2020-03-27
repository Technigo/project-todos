import React from 'react'

const Task = ({ task }) => {
  return (
    <li>{task.text}<input type="checkbox" value="" /></li>
  )
}

export default Task