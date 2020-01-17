/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useDispatch } from 'react-redux'
import { fridge } from 'reducers/fridge'
// import styled from 'styled-components'

export const Item = (props) => {
  const dispatch = useDispatch()

  const handleCheckClick = () => {
    dispatch(fridge.actions.toggleDone(props.item.id))
  }

  const handleRemovekClick = () => {
    dispatch(fridge.actions.removeItem(props.item.id))
  }

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={props.item.done}
          onChange={handleCheckClick}
        />
      </label>
      {props.item.task}
      <button type="button" onClick={handleRemovekClick}>
        remove
      </button>
    </li>
  )
}
