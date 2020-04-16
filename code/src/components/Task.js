import React from 'react'
import { useSelector } from 'react-redux'

export const Task = ({ text, done }) => {

  return (
    <div>
      <input
        type='checkbox'
        checked={done ? 'checked' : ''}>
      </input>
      <p>{text}</p>
    </div>
  )
}