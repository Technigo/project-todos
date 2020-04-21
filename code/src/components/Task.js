import React from 'react'


export const Task = ({ task }) => {
  return (
    <article>
      <p>{task.text}</p>
      <button type='button'
      onClick={() => { }}>
        Add To Do
      </button>
    </article>
  )
}
