import React from 'react'
import { useDispatch } from 'react-redux'
import { notepad } from 'reducers/notepad'
import styled from 'styled-components'
import { Button, DetailButton } from 'library/Button'
import { DetailTitle } from 'library/Text'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

export const Task = (props) => {
  const dispatch = useDispatch()

  /* const handleDetailButtonClick = () => {
    return (
      <DetailTitle>{props.item.description}</DetailTitle>
    )
  } */
  const handleDoneButtonClick = () => {
    dispatch(notepad.actions.removeTask(props.item.id))
  }

  return (
    <li>
      <span>{props.item.name}</span>
      {/* <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Show detail" /> */}
      <Button onClick={handleDoneButtonClick}>Done!</Button>
    </li>
  )
}