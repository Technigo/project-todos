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
            arialabel="completed"
            checked={props.item.complete}
            onChange={handleCheckboxClick} />
        </label>
        {props.item.text}
        <Button type="button" arialabel="delete" onClick={handleRemoveButtonClick}><span>🗑</span></Button>
      </List>
    </div>
  )


}

const List = styled.ul`
  color: darkblue;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right:0px
  font-size: 18px;
  font-family: 'Roboto' sans-serif;
  font-weight: 500;
  margin-top: 3px;
  margin-bottom:0px;
  display: inline-flex;
  align-items: center;
  text-align: left;

`

const Checkbox = styled.input`
  // padding-top: 10px; 
  // padding-bottom: 10px;
  //margin-right: 15px;
  height: 40px;
  width: 40px;
  
`
const Button = styled.button`
  width: 30px;
  height: 30px;
  background-color: #e8e9f1;
  text-align: center;
  line-height:13px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: bold;
  color: white;
  margin-left: 10px;
  padding: 1px;
  
  
  
`
