import React from "react"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { Checkbox } from '@material-ui/core'
import Divider from "@material-ui/core/Divider"
import { Delete } from '@material-ui/icons'
import styled from "styled-components"

import { useDispatch } from "react-redux"
import { tasks } from "reducers/tasks"

const MyListItemText = styled(ListItemText)`
  && {
  text-decoration: ${props => props.checked ? 'line-through': 'none'}
  }`

export const TodoItem = (props) => {

    const dispatch = useDispatch()

    const handleDone = (e) => {
        dispatch(tasks.actions.markDone(props.index))
      } 

      const handleRemove = (e) => {
          dispatch(tasks.actions.removeTask(props.index))
      }
  return (
    <>
      <ListItem>
        <Checkbox onChange={handleDone}>
        </Checkbox>
        <MyListItemText primary={props.task} checked={props.done}/>
        <Delete onClick={handleRemove}/>
      </ListItem>
      <Divider />
    </>
  )
}
