import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'

export const CheckBox = (props) => {
  const dispatch = useDispatch()

  const handleCheckboxClick = (id) => {
    dispatch(tasks.actions.toggleCheckbox(id))
    console.log("THIS IS THE ID:", id)
    console.log("CHANGED")
  }

  return (
    <input
      className="checkbox"
      type="checkbox"
      checked={props.task.complete}
      onChange={() => { handleCheckboxClick(props.task.id) }}>
    </input>
  )
}
