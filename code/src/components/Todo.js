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



        <Button type="button" onClick={handleRemoveButtonClick}>-</Button>
      </List>
    </div>
  )


}

const List = styled.ul`
 
  color: blue;
  background-color: lightgrey;
  align-items: center;
  justify-content: center;
  padding: 10px;
  
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
  width: 30px;
  height: 30px;
  background-color: #8aa8e9;
  text-align: center;
  line-height:14px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  // margin: 5px;
  padding: 3px;
`
