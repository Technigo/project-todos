import React from "react"

export const SingleTodo = ({ text }) => {
  // TODO:
  //add done/undone functionality
  //add checkbox
  //add delete button
  //styled component for done and undone state
  return (

    <li>
      <label>
        <input
          type="checkbox"
        />
      </label>
      {text}
    </li>
  )
}