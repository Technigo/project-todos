import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/Task'
import styled from 'styled-components/macro'

//for example add this:
//const {id, complete, text} = props.item

//and then in all the places that you now uses props.item.id for example, change to only use id

export const Todo = (props) => {
  const { id, complete, text } = props.item

  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(tasks.actions.toggleComplete(id))
  }

  const handleRemoveButtonClick = () => {
    dispatch(tasks.actions.removeItems(id))
  }

  return (
    <div>
      <List>
        <label>
          <Checkbox
            type="checkbox"
            arialabel="completed"
            checked={complete}
            onChange={handleCheckboxClick} />
        </label>
        <Todotext>{text}</Todotext>
        <Button type="button" arialabel="delete" onClick={handleRemoveButtonClick}><span role="img" arialabel="delete task">🗑</span></Button>
      </List>
    </div>
  )


}

const List = styled.ul`
  color: darkblue;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right:0px;
  font-size: 18px;
  font-family: 'Roboto' sans-serif;
  font-weight: 500;
  margin-top: 3px;
  margin-bottom:0px;
  display: flex;
  align-items: center;
  text-align: left;
`
const Todotext = styled.p`
  flex-grow: 1;
  margin: 5px;
`

const Checkbox = styled.input`
  // padding-top: 10px; 
  // padding-bottom: 10px;
  //margin-right: 15px;
  height: 25px;
  width: 25px;
  
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
  margin-right: 20px;
  padding: 1px 1px 1px 3px;
`
