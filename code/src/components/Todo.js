import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/Task'
import styled from 'styled-components/macro'


export const Todo = (props) => {

  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(tasks.actions.toggleComplete(props.item.id))
  }

  return (
    <List>
      <label>
        <input
          type="checkbox"
          checked={props.item.complete}
          onChange={handleCheckboxClick} />
      </label>
      {props.item.text}

    </List>

  )


}

const List = styled.ul`
 
  color: blue;
  background-color: grey;
  align-items: center;
  justify-content: center;
  padding-top: 10px; 
  padding-bottom: 10px;
  
`
