import React from 'react'
import { useDispatch } from 'react-redux'
import { ToDo } from 'reducers/ToDo'
import moment from 'moment'
import {Button} from "library/Button"
import styled from "styled-components"
import {CustomCheckbox} from "./CustomCheckbox"
import {Title, Subtitle, P,} from "library/Text"

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
    <ListItem>
      <TheName>
        
        <span><P>{name}</P> </span>
        <span>({category}) </span>
      </TheName>
      <CheckLabel>
         - Done!
        <CustomCheckbox
        isChecked={completed}
        onChangeHandler = {handleCheckboxClick}/>
      </CheckLabel>

      <Button type="button" onClick={handleRemoveButtonClick}>
        Remove
      </Button>
      <Details>
      <span>Started: {moment(startDate).format('MMM Do YYYY')}</span>
      {dueDate && <span> -> DUE: {moment(dueDate).format('MMM Do YYYY')}</span>}
      </Details>
    </ListItem>
  )
}
const ListItem = styled.li`
  display: flex;
  flex-direction:column;
  align-items:center;
  padding: 3px;
  margin: 5px;
  color: ${(props) => (props.checked ? "lightgrey" : "#3d3d3d")};
  transition: all 150ms;
  border: 0.1px solid lightslategray;
  `;

const CheckLabel = styled.div`
  display:inline-flex;
`
const TheName = styled.div`

`

const Details = styled.div`
font-size:12px;
`