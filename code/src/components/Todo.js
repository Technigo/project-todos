import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/Task'
import styled from 'styled-components/macro'


export const Todo = (props) => {

  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(tasks.actions.toggleComplete(props.item.id))
  }

  const handleRemoveButtonClick = () => {
    dispatch(tasks.actions.removeItems(props.item.id))
  }

  return (
    <div>
      <List>
        <label>
          <Checkbox
            type="checkbox"
            checked={props.item.complete}
            onChange={handleCheckboxClick} />
        </label>
        {props.item.text}

      </List>

      <Button type="button" onClick={handleRemoveButtonClick}>Remove</Button>

    </div>
  )


}

const List = styled.ul`
 
  color: blue;
  background-color: lightgrey;
  align-items: center;
  justify-content: center;
  padding-top: 10px; 
  padding-bottom: 10px;
  padding-left: 10
  
`

const Checkbox = styled.input`
 
  color: red;
  background-color: lightgrey;
  align-items: center;
  justify-content: center;
  padding-top: 10px; 
  padding-bottom: 10px;
  
`
const Button = styled.button`
  width: 70px;
  height: 20px;
  background-color: #8aa8e9;
  text-align: center;
  border-radius: 5px;
  font-size: 10px;
  font-weight: bold;
  color: white;
  // margin: 5px;
  padding: 3px;
`
