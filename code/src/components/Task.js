import React from 'react'

export const Task = (props) => {
  const { task, category, completed } = props.item

  return (
    <>
      <li>
        <span>{category}: </span>
        <span>{task}</span>
        <input
          type="checkbox"
          isChecked={completed}
          onChangeHandler={() => { }}
        />
        <button onClick={() => { }}>remove</button>
      </li>
    </>
  )
}
