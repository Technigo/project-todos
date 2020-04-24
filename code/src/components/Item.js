import React from 'react'
import { useDispatch } from 'react-redux'
import { ToDo } from 'reducers/ToDo'
import moment from 'moment'
import {Button} from "library/Button"
import styled from "styled-components"
import {CustomCheckbox} from "./CustomCheckbox"


export const Item = (props) => {
  const { id, name, dueDate, category, completed, startDate } = props.item
  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(ToDo.actions.toggleCompleted(id))
  }

  const handleRemoveButtonClick = () => {
    dispatch(ToDo.actions.removeItem(id))
  }

  return (
    <li>
      <span>{category}: </span>
      <span>{name} </span>
      <label>
         - Done!
        <CustomCheckbox
        isChecked={completed}
        onChangeHandler = {handleCheckboxClick}/>
      </label>

      <Button type="button" onClick={handleRemoveButtonClick}>
        Remove
      </Button>
      <span>ADDED: {moment(startDate).format('MMM Do YYYY')}</span>
      {dueDate && <span> -> DUE: {moment(dueDate).format('MMM Do YYYY')}</span>}
    </li>
  )
}
